import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold">Hourly Buzz</h2>
          <p className="text-sm mt-2">© 2025 Hourly Buzz. All rights reserved.</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Useful links</h3>
            <ul className="space-y-1">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/offers">Offers</Link></li>
              <li><Link href="/happy-hour">Happy Hour Now</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Business</h3>
            <ul className="space-y-1">
              <li><Link href="/advertising">Advertising</Link></li>
              <li><Link href="/add-restaurant">Add your restaurant</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About Hour Buzz</h3>
            <ul className="space-y-1">
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Language</h3>
            <ul className="space-y-1">
              <li>English</li>
            </ul>
            <h3 className="font-semibold mb-2 mt-5">Country</h3>
            <ul>
              <li>Canada</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}