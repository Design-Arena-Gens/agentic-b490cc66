'use client'

import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Your Application Platform</h1>
          <p className={styles.heroSubtitle}>
            Innovative solutions for modern businesses
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Core Features</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Lightning Fast</h3>
            <p>Experience blazing-fast performance with optimized architecture designed for speed</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>Secure by Default</h3>
            <p>Enterprise-grade security with end-to-end encryption and compliance standards</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Advanced Analytics</h3>
            <p>Gain insights with powerful analytics and real-time data visualization tools</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌐</div>
            <h3>Cloud Native</h3>
            <p>Built for the cloud with scalability and reliability at its core</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔧</div>
            <h3>Easy Integration</h3>
            <p>Seamlessly integrate with your existing tools and workflows</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3>Cross-Platform</h3>
            <p>Access your application anywhere, on any device, at any time</p>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className={styles.specifications}>
        <h2 className={styles.sectionTitle}>Technical Specifications</h2>
        <div className={styles.specsGrid}>
          <div className={styles.specCategory}>
            <h3>Performance</h3>
            <ul>
              <li>Response time: &lt;100ms</li>
              <li>99.9% uptime SLA</li>
              <li>Auto-scaling capabilities</li>
              <li>CDN-powered delivery</li>
            </ul>
          </div>
          <div className={styles.specCategory}>
            <h3>Security</h3>
            <ul>
              <li>AES-256 encryption</li>
              <li>SOC 2 Type II certified</li>
              <li>GDPR & CCPA compliant</li>
              <li>Multi-factor authentication</li>
            </ul>
          </div>
          <div className={styles.specCategory}>
            <h3>Compatibility</h3>
            <ul>
              <li>RESTful API</li>
              <li>Webhook support</li>
              <li>OAuth 2.0 integration</li>
              <li>SDK for major platforms</li>
            </ul>
          </div>
          <div className={styles.specCategory}>
            <h3>Infrastructure</h3>
            <ul>
              <li>Multi-region deployment</li>
              <li>Automated backups</li>
              <li>Load balancing</li>
              <li>DDoS protection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <div className={styles.benefitsContent}>
          <div className={styles.benefitItem}>
            <h3>🚀 Accelerate Development</h3>
            <p>Reduce time to market by 50% with our pre-built components and intuitive interface</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>💰 Cost Effective</h3>
            <p>Save on infrastructure costs with efficient resource utilization and transparent pricing</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>🤝 24/7 Support</h3>
            <p>Get expert assistance whenever you need it with our dedicated support team</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>📈 Scale Effortlessly</h3>
            <p>Grow your business without worrying about technical limitations or capacity constraints</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <h2 className={styles.sectionTitle}>Flexible Pricing</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Starter</h3>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>29</span>
              <span className={styles.period}>/month</span>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>✓ Up to 10,000 requests/month</li>
              <li>✓ Basic analytics</li>
              <li>✓ Email support</li>
              <li>✓ 99.5% uptime SLA</li>
            </ul>
            <button className={styles.pricingButton}>Choose Plan</button>
          </div>
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.badge}>Most Popular</div>
            <h3>Professional</h3>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>99</span>
              <span className={styles.period}>/month</span>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>✓ Up to 100,000 requests/month</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
              <li>✓ 99.9% uptime SLA</li>
              <li>✓ Custom integrations</li>
            </ul>
            <button className={styles.pricingButton}>Choose Plan</button>
          </div>
          <div className={styles.pricingCard}>
            <h3>Enterprise</h3>
            <div className={styles.price}>
              <span className={styles.amount}>Custom</span>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>✓ Unlimited requests</li>
              <li>✓ Enterprise analytics</li>
              <li>✓ Dedicated support</li>
              <li>✓ 99.99% uptime SLA</li>
              <li>✓ Custom solutions</li>
              <li>✓ On-premise deployment</li>
            </ul>
            <button className={styles.pricingButton}>Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of businesses already using our platform</p>
        <button className={styles.ctaButtonLarge}>Start Free Trial</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>API Reference</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Security</li>
              <li>Compliance</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Your Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
