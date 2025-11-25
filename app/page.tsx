'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/xzbwqelz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        alert('There was a problem sending your message. Please email directly to kerstin@tiethecelticknot.ca');
      }
    } catch (error) {
      alert('There was a problem sending your message. Please email directly to kerstin@tiethecelticknot.ca');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f3ed]">
      {/* Fixed Header Navigation */}
      <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-[#e8ede7]/95 backdrop-blur-sm border-b border-[#c8d4c0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center hover:opacity-90 transition"
          >
            <Image
              src="/celtic-heart-logo.svg"
              alt="Tie the Celtic Knot - Celtic Heart Logo"
              width={300}
              height={300}
              className="h-20 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-medium items-center">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-[#1e3a2d] transition">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-600 hover:text-[#1e3a2d] transition">
              Your Process
            </button>
            <button onClick={() => scrollToSection('story')} className="text-gray-600 hover:text-[#1e3a2d] transition">
              My Story
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-[#1e3a2d] transition">
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#1e3a2d] text-white px-4 py-2 rounded-lg hover:bg-[#0f1f19] transition shadow-md"
            >
              Check Availability
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1e3a2d] hover:bg-[#e8ede7]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f0f3ed] shadow-xl py-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col space-y-3 px-4">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#1e3a2d] py-2 border-b border-[#c8d4c0] text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-[#1e3a2d] py-2 border-b border-[#c8d4c0] text-left">
                Your Process
              </button>
              <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-[#1e3a2d] py-2 border-b border-[#c8d4c0] text-left">
                My Story
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#1e3a2d] py-2 border-b border-[#c8d4c0] text-left">
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#1e3a2d] text-white text-center py-3 mt-2 rounded-lg hover:bg-[#0f1f19] transition shadow-lg"
              >
                Check Availability
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* 1. Hero Section */}
        <section
          id="home"
          className="pt-32 pb-16 bg-[#1e3a2d] text-white relative overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(30, 58, 45, 0.75), rgba(30, 58, 45, 0.75)), url(/Hand-fast-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="md:w-3/4 lg:w-2/3 space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold font-serif leading-tight tracking-tight drop-shadow-lg">
                Your Love Story.
                <br />
                Woven with Meaning and Celtic Spirit.
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed drop-shadow-md">
                Licensed Humanist Officiant Kerstin Sandstrom specializes in bespoke ceremonies, from ancient handfasting rituals to modern, inclusive celebrations, grounded in nature and authenticity.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-block bg-[#1e3a2d] text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-2xl uppercase tracking-wider transform hover:scale-105 transition hover:bg-[#0f1f19]"
              >
                Inquire & Check Availability
              </button>
            </div>
          </div>
        </section>

        {/* Wedding Spotlight Section */}
        <section className="py-20" style={{background: 'linear-gradient(to bottom right, #e8f5e9, #dde5d5)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#1e3a2d] px-4 py-2 rounded-full text-sm font-bold uppercase mb-4 text-white">
                  Specializing in Weddings
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e3a2d]">
                  Your Celtic Wedding Ceremony Awaits
                </h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  From traditional handfasting rituals to modern inclusive celebrations, I create bespoke wedding ceremonies that honor your unique love story with Celtic elegance and meaning.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1e3a2d] mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-gray-700">Fully personalized handfasting & ribbon-tying ceremonies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1e3a2d] mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-gray-700">Licensed Ontario Celebrant - legally binding ceremonies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#1e3a2d] mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-gray-700">Nature-based, Celtic-inspired, & humanist traditions</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#1e3a2d] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#0f1f19] transition shadow-2xl"
                >
                  Book Your Wedding Ceremony
                </button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url(/Hand-fast-1.jpg)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Services Section */}
        <section id="services" className="py-24 bg-[#f0f3ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-base font-semibold uppercase text-[#1e3a2d]">We Also Offer</span>
              <h2 className="mt-2 text-4xl font-bold text-[#1e3a2d] font-serif">Other Meaningful Ceremonies</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Beyond weddings, I create heartfelt ceremonies for all of life&apos;s important moments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Child Naming Service */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border border-[#c8d4c0] text-center">
                <div className="w-28 h-28 bg-[#1e3a2d] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#1e3a2d] font-serif mb-3">Child Naming Ceremonies</h3>
                <p className="text-gray-600 mb-4">
                  A non-religious, joyful celebration of new life. Honouring the child and welcoming them into the community with meaningful readings and symbolic acts.
                </p>
                <button onClick={() => scrollToSection('contact')} className="text-[#1e3a2d] hover:underline font-medium inline-flex items-center">
                  Celebrate Your Child
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Memorial Service */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border border-[#c8d4c0] text-center">
                <div className="w-28 h-28 bg-[#1e3a2d] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#1e3a2d] font-serif mb-3">Funerals & Memorials</h3>
                <p className="text-gray-600 mb-4">
                  Warm, authentic, and compassionate services that honour the life lived. Creating a dignified and personal tribute that brings comfort and reflection.
                </p>
                <button onClick={() => scrollToSection('contact')} className="text-[#1e3a2d] hover:underline font-medium inline-flex items-center">
                  Arrange a Tribute
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages Section */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-base font-semibold uppercase text-[#1e3a2d]">Investment in Your Special Day</span>
              <h2 className="mt-2 text-4xl font-bold text-[#1e3a2d] font-serif">Service Packages</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the package that best suits your ceremony needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Deluxe Wedding Ceremony */}
              <div className="bg-gradient-to-br from-[#1e3a2d] to-[#0f1f19] p-8 rounded-xl shadow-2xl hover:shadow-3xl transition relative overflow-hidden border-4 border-[#1e3a2d]">
                <div className="absolute top-0 right-0 bg-yellow-400 text-[#1e3a2d] px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white font-serif mb-2">Deluxe Wedding Ceremony</h3>
                <div className="text-4xl font-bold text-white mb-6">$895</div>
                <ul className="space-y-3 mb-6 text-white">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Initial meeting included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Two more consultations (one month out & one to two weeks before)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited phone calls & emails</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One rehearsal - includes wine & cheese for wedding party</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customised service with rituals & traditional elements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Paperwork filled out & mailed within 24 hours</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-yellow-400 text-[#1e3a2d] py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
                >
                  Book This Package
                </button>
              </div>

              {/* Full Service Wedding Ceremony */}
              <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition border-2 border-[#c8d4c0]">
                <h3 className="text-2xl font-bold text-[#1e3a2d] font-serif mb-2">Full Service Wedding</h3>
                <div className="text-4xl font-bold text-[#1e3a2d] mb-6">$650</div>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Initial meeting included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One consultation (one to two weeks before)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited phone calls & emails</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One rehearsal included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customised service with rituals & traditional elements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Paperwork filled out & mailed within 24 hours</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#1e3a2d] text-white py-3 rounded-lg font-bold hover:bg-[#0f1f19] transition"
                >
                  Book This Package
                </button>
              </div>

              {/* Custom Ceremony */}
              <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition border-2 border-[#c8d4c0]">
                <h3 className="text-2xl font-bold text-[#1e3a2d] font-serif mb-2">Custom Ceremony</h3>
                <div className="text-4xl font-bold text-[#1e3a2d] mb-6">$450</div>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Initial meeting included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One consultation (one to two weeks before)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited phone calls & emails</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customised service with rituals & traditional elements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Paperwork filled out & mailed within 24 hours</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#1e3a2d] text-white py-3 rounded-lg font-bold hover:bg-[#0f1f19] transition"
                >
                  Book This Package
                </button>
              </div>

              {/* Basic Signing Package */}
              <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition border-2 border-[#c8d4c0]">
                <h3 className="text-2xl font-bold text-[#1e3a2d] font-serif mb-2">Basic Signing Package</h3>
                <div className="text-4xl font-bold text-[#1e3a2d] mb-6">$300</div>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Initial meeting included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One consultation (one to two weeks before)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited phone calls & emails</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#1e3a2d] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Paperwork filled out & mailed within 24 hours</span>
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#1e3a2d] text-white py-3 rounded-lg font-bold hover:bg-[#0f1f19] transition"
                >
                  Book This Package
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Ceremony Process Section */}
        <section id="process" className="py-24 bg-[#e8ede7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-base font-semibold uppercase text-[#1e3a2d]">Your Journey Together</span>
              <h2 className="mt-2 text-4xl font-bold text-[#1e3a2d] font-serif">Creating Your Perfect Ceremony: The 3-Step Process</h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-[#1e3a2d] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-xl">
                  1
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1e3a2d]">
                  <h3 className="text-2xl font-bold text-[#1e3a2d] mb-3">Discovery & Vision</h3>
                  <p className="text-gray-600">
                    We begin with a connection call to discuss your date, location, and the specific emotions you want your ceremony to evoke. We talk about your story and your specific cultural or symbolic desires (like handfasting).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-[#1e3a2d] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-xl">
                  2
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1e3a2d]">
                  <h3 className="text-2xl font-bold text-[#1e3a2d] mb-3">Deep Dive & Custom Drafting</h3>
                  <p className="text-gray-600">
                    I conduct a &quot;story deep dive&quot; to gather all the rich details. I then meticulously draft a custom script, incorporating your vows, readings, and unique rituals, ensuring every word feels true to you.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-[#1e3a2d] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-xl">
                  3
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1e3a2d]">
                  <h3 className="text-2xl font-bold text-[#1e3a2d] mb-3">Rehearsal & The Celebration</h3>
                  <p className="text-gray-600">
                    We finalize the details, and I handle all necessary paperwork. On the day, I deliver the ceremony with warmth, confidence, and professionalism, allowing you to fully relax and immerse yourselves in the moment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Pricing Section */}

        {/* 5. Testimonials Section */}
        <section id="testimonials" className="py-24 bg-[#f0f3ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-base font-semibold uppercase text-[#1e3a2d]">Social Proof</span>
              <h2 className="mt-2 text-4xl font-bold text-[#1e3a2d] font-serif">What Couples & Families Are Saying</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#1e3a2d]">
                <div className="flex text-[#1e3a2d] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  &quot;Kerstin captured our personalities and our love for nature perfectly. The handfasting ritual she wove in was the most magical, meaningful moment of the whole day. Truly bespoke and deeply authentic.&quot;
                </p>
                <p className="font-semibold text-[#1e3a2d]">— Emily & David, Forest Wedding, 2025</p>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#1e3a2d]">
                <div className="flex text-[#1e3a2d] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  &quot;We wanted a secular ceremony for our child&apos;s naming, and Kerstin made it feel so special and inclusive. The tone was perfect—warm, respectful, and focused completely on our family&apos;s journey.&quot;
                </p>
                <p className="font-semibold text-[#1e3a2d]">— The Chen Family, Naming Ceremony, 2025</p>
              </div>

              {/* Review 3 */}
              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#1e3a2d]">
                <div className="flex text-[#1e3a2d] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  &quot;Her professionalism and calm presence were a lifeline during a difficult time. The memorial tribute she crafted was honest, heartfelt, and beautifully honoured our mother&apos;s spirit.&quot;
                </p>
                <p className="font-semibold text-[#1e3a2d]">— Sarah M., Memorial Service, 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. About Kerstin / My Story Section */}
        <section id="story" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <div className="rounded-xl shadow-2xl overflow-hidden border-4 border-[#c8d4c0]">
                <Image
                  src="/KerstinO-scaled-e1603739338128-300x300-1.jpg"
                  alt="Kerstin Sandstrom - Licensed Ontario Celebrant"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <span className="text-base font-semibold uppercase text-[#1e3a2d]">Meet Kerstin</span>
              <h2 className="text-4xl font-bold text-[#1e3a2d] font-serif">The Officiant Behind the Knot</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello! I&apos;m Kerstin Sandstrom, a licensed Ontario Celebrant through Humanist Canada. My mission is to ensure your ceremony is not just a formality, but a <strong>profound, unforgettable piece of theatre</strong> rooted in your shared story.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My passion for the natural world, history, and the rich symbolism of Celtic traditions informs every ceremony I write. Whether we are incorporating a Viking oath ring, designing a custom handfasting, or simply capturing the essence of your non-religious love, my focus is always on creating <strong>authenticity, meaning, and a touch of magic</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                I am here to honor all relationships, identities, and spiritual backgrounds, ensuring your ceremony is exactly as you envision it.
              </p>
              <button onClick={() => scrollToSection('contact')} className="inline-flex items-center text-[#1e3a2d] font-semibold hover:text-[#0f1f19] transition">
                Start the Conversation Today
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </section>


        {/* 8. FAQ Section */}
        <section className="py-24 bg-[#e8ede7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-base font-semibold uppercase text-[#1e3a2d]">Common Questions</span>
              <h2 className="mt-2 text-4xl font-bold text-[#1e3a2d] font-serif">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <details className="bg-white rounded-xl p-6 shadow-lg border-l-8 border-[#1e3a2d] group">
                <summary className="text-xl font-bold text-[#1e3a2d] cursor-pointer list-none flex justify-between items-center">
                  Are you legally registered in Ontario?
                  <svg className="w-5 h-5 text-[#1e3a2d] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Yes! I am a fully licensed Ontario Celebrant through Humanist Canada, authorized to perform legally binding weddings anywhere in the province. All paperwork and registration is handled professionally.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-lg border-l-8 border-[#1e3a2d] group">
                <summary className="text-xl font-bold text-[#1e3a2d] cursor-pointer list-none flex justify-between items-center">
                  How far in advance should I book?
                  <svg className="w-5 h-5 text-[#1e3a2d] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  I recommend booking 6-12 months in advance, especially for peak wedding season (May-October). However, I can accommodate shorter timelines when possible. Contact me to check my availability for your date.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-lg border-l-8 border-[#1e3a2d] group">
                <summary className="text-xl font-bold text-[#1e3a2d] cursor-pointer list-none flex justify-between items-center">
                  What is a handfasting ceremony?
                  <svg className="w-5 h-5 text-[#1e3a2d] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Handfasting is an ancient Celtic tradition where couples&apos; hands are tied together with ribbons or cords, symbolizing the binding of two lives. It&apos;s a beautiful, visual ritual that can be incorporated into your ceremony and personalized with meaningful colors and symbolism.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-lg border-l-8 border-[#1e3a2d] group">
                <summary className="text-xl font-bold text-[#1e3a2d] cursor-pointer list-none flex justify-between items-center">
                  Can we write our own vows?
                  <svg className="w-5 h-5 text-[#1e3a2d] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Of course! You can write your own vows, use traditional vows, or work with me to craft something unique. I can provide guidance, templates, and feedback to help you create vows that feel authentic and meaningful to you.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 8. Contact & Booking Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-base font-semibold uppercase text-[#1e3a2d]">Book Your Date</span>
              <h2 className="mt-2 text-4xl font-bold text-[#1e3a2d] font-serif">Inquire About Availability</h2>
              <p className="text-lg text-gray-600 mt-4">
                Please fill out this form to check my availability and receive a custom package quote.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-[#c8d4c0]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name(s) *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-[#1e3a2d] focus:ring-2 focus:ring-[#1e3a2d] focus:ring-opacity-50 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-[#1e3a2d] focus:ring-2 focus:ring-[#1e3a2d] focus:ring-opacity-50 transition"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="event_type" className="block text-sm font-medium text-gray-700 mb-1">
                      Type of Ceremony *
                    </label>
                    <select
                      id="event_type"
                      name="event_type"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-[#1e3a2d] focus:ring-2 focus:ring-[#1e3a2d] focus:ring-opacity-50 transition"
                    >
                      <option value="">Select an Option</option>
                      <option value="Wedding">Wedding / Handfasting</option>
                      <option value="Naming">Child Naming Ceremony</option>
                      <option value="Memorial">Funeral / Memorial</option>
                      <option value="Other">Other Life Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Event Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-[#1e3a2d] focus:ring-2 focus:ring-[#1e3a2d] focus:ring-opacity-50 transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell Me About Your Vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Where is the event? What makes your story unique?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-[#1e3a2d] focus:ring-2 focus:ring-[#1e3a2d] focus:ring-opacity-50 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a2d] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-[#0f1f19] transition uppercase tracking-wider transform hover:scale-[1.01]"
                >
                  Send Inquiry
                </button>
              </form>

              {formSubmitted && (
                <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-semibold">Thank you for your inquiry!</p>
                  <p>Kerstin will be in touch within 48 hours to discuss your unique celebration.</p>
                </div>
              )}
            </div>

            {/* Social Media Call-out */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-3">
                Want to see recent ceremonies and get inspiration?
              </p>
              <a
                href="https://www.instagram.com/tiethecelticknot/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1e3a2d] font-semibold hover:text-[#0f1f19] transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @tiethecelticknot on Instagram
              </a>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e3a2d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4">
            <h4 className="text-xl font-bold font-serif">Tie the Celtic Knot</h4>
            <p className="text-gray-200">Humanist Officiant Services for Ontario, Canada</p>
            <p className="text-gray-200">
              <a href="mailto:kerstin@tiethecelticknot.ca" className="hover:text-[#e8ede7] transition">
                kerstin@tiethecelticknot.ca
              </a>
            </p>

            {/* Social Media */}
            <div className="flex justify-center items-center gap-2 pt-2">
              <span className="text-gray-300 text-sm">Follow along for ceremony inspiration:</span>
              <a
                href="https://www.instagram.com/tiethecelticknot/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white hover:text-[#e8ede7] transition"
                aria-label="Follow Tie the Celtic Knot on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @tiethecelticknot
              </a>
            </div>

            <div className="pt-4 text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Tie the Celtic Knot. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
