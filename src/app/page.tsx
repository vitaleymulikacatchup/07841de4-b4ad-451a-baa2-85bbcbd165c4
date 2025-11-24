"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Coffee, Leaf, Flame, Users, Star, Instagram, Facebook, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="aurora"
      cardStyle="glass-flat"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981327524-ezka5tsn.jpg"
          logoAlt="SuperCoffee Logo"
          brandName="SuperCoffee"
          button={{
            text: "Order Now",
            href: "contact"
          }}
          className="py-4 px-6"
          buttonClassName="px-6 py-2"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Experience Premium Coffee"
          description="Crafted with passion. Served with excellence. Your perfect coffee moment awaits."
          tag="SuperCoffee"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Explore Menu",
              href: "features"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981328833-80v54hhe.jpg",
              imageAlt: "Premium artisan coffee cup"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981330290-wvg787mf.jpg",
              imageAlt: "Modern coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981331723-bm8dfzsp.jpg",
              imageAlt: "Professional espresso machine"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981332882-49bunkdp.jpg",
              imageAlt: "Latte art specialty coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981334025-m2y8rlma.jpg",
              imageAlt: "Coffee beans roasting"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About SuperCoffee"
          description="Since 2015, we have been dedicated to sourcing the finest coffee beans from around the world and roasting them to perfection. Every cup tells a story of craftsmanship and passion."
          tag="Our Story"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981335624-pyn9uggy.jpg"
          imageAlt="SuperCoffee shop interior"
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Premium Sourcing",
              description: "We partner with ethical coffee farmers to bring you the highest quality beans",
              icon: Leaf
            },
            {
              title: "Expert Roasting",
              description: "Our master roasters craft the perfect roast for each coffee varietal",
              icon: Flame
            },
            {
              title: "Skilled Baristas",
              description: "Our team brings years of experience and passion to every cup",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Our Coffee Collection"
          description="Discover our carefully curated selection of specialty coffees and beverages"
          tag="Featured Products"
          tagIcon={Star}
          features={[
            {
              id: "01",
              title: "Single Origin Espresso",
              description: "Rich, bold flavors from our signature single-origin selection. Perfect for espresso shots or lungo shots.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981336742-y249mcig.jpg",
              imageAlt: "Single origin espresso"
            },
            {
              id: "02",
              title: "Creamy Cappuccino",
              description: "Perfectly balanced espresso with velvety steamed milk and smooth microfoam. Pure coffee bliss.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981338553-c238y2eh.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "03",
              title: "Classic Americano",
              description: "Bold and smooth. Our American-style espresso with hot water, delivering pure coffee perfection.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981339995-cq32sm9n.jpg",
              imageAlt: "Classic americano"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Customers Say"
          description="Join hundreds of coffee lovers who have made SuperCoffee their daily ritual"
          tag="Testimonials"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Coffee Enthusiast",
              company: "Tech Startup Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981341314-fk27xmn5.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Regular Customer",
              company: "Marketing Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981342980-zu8yr1wg.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Coffee Connoisseur",
              company: "Food Blogger",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981344593-8jl4xz71.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Park",
              role: "Morning Regular",
              company: "Graphic Designer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763981346222-ekhxlpoq.jpg",
              imageAlt: "David Park"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Have questions or want to visit us? Send us a message and we'll get back to you as soon as possible."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your coffee preferences or inquiry",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SuperCoffee"
          copyrightText="© SuperCoffee, 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "#"
                }
              ]
            },
            {
              title: "Products",
              items: [
                {
                  label: "Coffee Menu",
                  href: "features"
                },
                {
                  label: "Seasonal Blends",
                  href: "features"
                },
                {
                  label: "Merchandise",
                  href: "#"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "FAQs",
                  href: "#"
                },
                {
                  label: "Feedback",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/supercoffee",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/supercoffee",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/supercoffee",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}