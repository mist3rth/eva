import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log(`BROWSER CONSOLE [${msg.type()}]: ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.log(`BROWSER ERROR: ${err.message}`);
  });

  try {
    console.log('Navigating to http://localhost:3004/ ...');
    await page.goto('http://localhost:3004/', { waitUntil: 'networkidle' });
    
    // Wait a bit for lazy components
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('Page title:', await page.title());
    
    // Check if ContactForm is in DOM
    const contactForm = await page.$('#contact');
    console.log('Contact section found:', !!contactForm);

    if (!contactForm) {
        const bodyContent = await page.content();
        console.log('Body snippet:', bodyContent.substring(0, 500));
    }

  } catch (e) {
    console.error('Script error:', e);
  } finally {
    await browser.close();
  }
})();
