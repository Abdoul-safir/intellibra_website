"use client";

import { Button } from "../../components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl md:text-6xl font-medium">
            Let’s Connect
          </h1>
        </div>
      </section>

      {/* Intro + Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Reach Out Anytime
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-500">
              For questions about IntelliBra, partnership interest, or anything
              else, fill out our quick contact form. We’ll get back to you
              within 2–3 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Organization / Affiliation"
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                />

                <div className="relative">
                  <select
                    className="w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Subject
                    </option>
                    <option>General inquiry</option>
                    <option>Partnership</option>
                    <option>Media</option>
                    <option>Support</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▾
                  </span>
                </div>

                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full resize-y rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                />

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-700">
                    <label className="inline-flex items-center gap-2">
                      <input type="checkbox" className="size-4 rounded border-gray-300" />
                      Email
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="checkbox" className="size-4 rounded border-gray-300" />
                      Phone
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="checkbox" className="size-4 rounded border-gray-300" />
                      Either is fine
                    </label>
                  </div>
                </div>

                <label className="flex items-start gap-3 text-xs text-gray-600">
                  <input type="checkbox" className="mt-0.5 size-4 rounded border-gray-300" />
                  <span>
                    I agree to the collection and storage of my data for
                    communication purposes.
                  </span>
                </label>

                <Button type="submit" variant="pink" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Card */}
            <aside>
              <div className="relative overflow-hidden rounded-2xl bg-black text-white p-6 md:p-8">
                {/* decorative */}
                <div className="pointer-events-none absolute -right-12 -bottom-12 h-56 w-56 rounded-full bg-gradient-to-br from-[#C32BFF] to-[#FF2C62] opacity-70 blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold">Reach Out</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    We’re ready to connect and work together to make early
                    breast cancer detection accessible to all.
                  </p>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Address</p>
                        <p className="text-sm text-gray-300">Yaoundé, bastos</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone Number</p>
                        <p className="text-sm text-gray-300">+237-655-541-102</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-gray-300">support@intellibra.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

