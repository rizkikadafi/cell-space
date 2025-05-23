// src/app/footer-section.tsx

import Link from 'next/link';
import Logo from '@/components/ui/logo';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const footerNavLinks = [
    { title: 'Tentang Kami', href: '#about' },
    { title: 'Layanan', href: '#service' },
    { title: 'Kontak', href: '#' },
    { title: 'Kebijakan Privasi', href: '#' },
    { title: 'Ketentuan Layanan', href: '#' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
  ];

  return (
    <footer id="footer" className="mt-20 py-8 bg-muted/30 text-muted-foreground border-t border-border rounded-t-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              Platform pembelajaran Biologi Sel interaktif dengan visualisasi 3D.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-3">Tautan Cepat</h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-3">Ikuti Kami</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="text-center text-sm">
          <p>&copy; {currentYear} CellSpace. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </div>
    </footer>
  );
}
