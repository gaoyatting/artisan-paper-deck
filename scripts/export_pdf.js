#!/usr/bin/env node

/**
 * Artisan Paper Deck - 16:9 PDF Exporter
 * 将 Artisan Paper 演示文稿导出为 16:9 工业级无损矢量 PDF 胶片
 */

const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function exportDeckToPdf(inputHtmlPath, outputPdfPath, options = {}) {
  const resolvedInput = path.resolve(inputHtmlPath);
  if (!fs.existsSync(resolvedInput)) {
    console.error(`[Error] Input file not found: ${resolvedInput}`);
    process.exit(1);
  }

  const defaultOutput = resolvedInput.replace(/\.html$/, '.pdf');
  const resolvedOutput = outputPdfPath ? path.resolve(outputPdfPath) : defaultOutput;

  console.log(`[Deck Exporter] Launching Chrome engine...`);
  const browser = await puppeteer.launch({
    executablePath: options.executablePath || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // 16:9 视口高分屏模拟
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  console.log(`[Deck Exporter] Loading ${resolvedInput}...`);
  await page.goto(`file://${resolvedInput}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.evaluate(() => document.fonts.ready).catch(() => {});

  // 预置打印模式：强制结束所有 GSAP 动效并展平为逐页连续页面供 PDF 渲染引擎分页抓取
  await page.evaluate(() => {
    if (window.currentTimeline) {
      window.currentTimeline.progress(1);
    }
    document.querySelectorAll('.slide-pane').forEach((el) => {
      el.style.display = el.id === 'slide-2' ? 'grid' : 'flex';
      el.style.position = 'relative';
      el.style.visibility = 'visible';
      el.style.opacity = '1';
      el.style.pageBreakAfter = 'always';
    });
    document.querySelectorAll('.slide-pane *').forEach((el) => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
    });
  });

  console.log(`[Deck Exporter] Generating 16:9 Archival PDF...`);
  await page.pdf({
    path: resolvedOutput,
    width: '16in',
    height: '9in',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log(`[Deck Exporter] ✅ Successfully exported: ${resolvedOutput}`);
}

// 命令行运行支持
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log(`Usage: node export_pdf.js <deck.html> [output.pdf]`);
    process.exit(0);
  }
  exportDeckToPdf(args[0], args[1]);
}

module.exports = { exportDeckToPdf };
