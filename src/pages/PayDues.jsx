import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShield, 
  FiCreditCard, 
  FiLock, 
  FiCheckCircle, 
  FiSmartphone, 
  FiFileText, 
  FiX, 
  FiCpu 
} from 'react-icons/fi';

const PayDuesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customEase = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  // The Coming Soon Modal
  const ComingSoonModal = () => (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#04331A]/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full relative shadow-2xl border border-[#10B981]/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition-colors z-10"
            >
              <FiX size={20} />
            </button>

            <div className="w-16 h-16 bg-[#04331A] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#04331A]/20 relative z-10">
              <FiCpu className="text-[#10B981]" size={28} />
            </div>
            
            <h3 className="text-2xl font-black text-[#04331A] mb-3 relative z-10">Gateway Integration Pending</h3>
            <p className="text-[#04331A]/60 font-medium leading-relaxed mb-8 relative z-10">
              The payment gateway API is currently being configured for the new academic session. We are ensuring a secure, seamless transaction experience. Check back shortly.
            </p>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full py-4 rounded-xl bg-gray-100 text-[#04331A] font-bold hover:bg-gray-200 transition-colors relative z-10"
            >
              Close Window
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24 -mt-28 md:-mt-32 relative overflow-hidden font-mono selection:bg-[#10B981] selection:text-white">
      
      <ComingSoonModal />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#04331A] min-h-[90vh] flex items-center overflow-hidden z-10 rounded-b-[3rem] md:rounded-b-[4rem] pt-[10rem] md:pt-[14rem] pb-24 shadow-[0_20px_60px_-15px_rgba(4,51,26,0.4)] border-b border-[#07562C]">
        
        {/* Fintech-style Grid & Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#10B981]/20 to-transparent rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Call to Action */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7 mt-8 md:mt-0"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 bg-[#07562C]/50 backdrop-blur-md border border-[#10B981]/30 px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-[#10B981]/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span className="text-[#10B981] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">Secured by Paystack / Flutterwave</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.05] tracking-tighter mb-6 drop-shadow-2xl">
              Powering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-green-200 pr-2">Innovation.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base md:text-xl text-white/70 font-medium max-w-lg mb-10 leading-relaxed border-l-2 border-[#10B981] pl-4">
              Your dues are the lifeblood of our initiatives. From hackathons to cutting-edge tech workshops, every naira builds a stronger engineering community.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative flex items-center justify-center gap-3 bg-[#10B981] text-[#04331A] font-black text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <FiCreditCard size={20} />
                  Initiate Payment
                </span>
              </button>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
              >
                <FiFileText /> Fetch Receipt
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT Receipt Card (Premium Design) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="relative flex justify-center lg:justify-end w-full lg:col-span-5 mt-6 lg:mt-0"
          >
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] z-10 lg:[transform:perspective(1000px)_rotateY(-15deg)_rotateX(5deg)]"
            >
              {/* Receipt Main Body */}
              <div className="bg-[#0A1A12]/80 backdrop-blur-xl border border-[#10B981]/20 rounded-t-[2rem] p-8 shadow-2xl relative overflow-hidden">
                {/* Huge faded background icon */}
                <FiShield className="absolute -right-8 -bottom-8 text-[#10B981]/5 text-[200px] pointer-events-none rotate-12" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                      <p className="text-white/50 text-[9px] font-black uppercase tracking-[0.2em]">Verified Payment</p>
                    </div>
                    <h3 className="text-white font-black text-2xl tracking-tight">2026/2027</h3>
                  </div>
                </div>

                <div className="space-y-5 relative z-10">
                  <div className="group">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.1em] mb-1">Fresher Quota</p>
                    <div className="flex justify-between items-end border-b border-white/5 pb-2 group-hover:border-[#10B981]/30 transition-colors">
                      <span className="text-white/90 font-medium text-sm">Level 100/200 DE</span>
                      <span className="text-[#10B981] font-black text-2xl">₦5,000</span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.1em] mb-1">Staylite Quota</p>
                    <div className="flex justify-between items-end border-b border-white/5 pb-2 group-hover:border-[#10B981]/30 transition-colors">
                      <span className="text-white/90 font-medium text-sm">Level 200 - 500</span>
                      <span className="text-white font-black text-2xl">₦3,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tear-off divider */}
              <div className="relative bg-[#0A1A12]/80 backdrop-blur-xl border-x border-[#10B981]/20 h-8 flex items-center justify-between overflow-hidden">
                <div className="absolute left-0 w-4 h-4 bg-[#04331A] rounded-r-full -translate-x-px border-r border-[#10B981]/20"></div>
                <div className="w-full border-t-2 border-dashed border-white/10 mx-6"></div>
                <div className="absolute right-0 w-4 h-4 bg-[#04331A] rounded-l-full translate-x-px border-l border-[#10B981]/20"></div>
              </div>

              {/* Receipt Footer (Barcode) */}
              <div className="bg-[#0A1A12]/80 backdrop-blur-xl border-b border-x border-[#10B981]/20 rounded-b-[2rem] p-8 flex flex-col items-center shadow-2xl">
                <div className="font-mono text-white/20 text-3xl tracking-[-0.15em] flex justify-center w-full select-none overflow-hidden h-10">
                  ||||| || ||| | ||| |||| | || ||| || |||
                </div>
                <p className="text-white/40 text-[9px] font-black mt-3 uppercase tracking-[0.3em]">TXN-NIAESB-884920</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* --- TRUST BANNER --- */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 -mt-16 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(4,51,26,0.1)] border border-[#04331A]/5 flex flex-wrap justify-center md:justify-between items-center gap-6"
        >
          <div className="flex items-center gap-3 text-[#04331A]/60 text-sm font-bold">
            <FiShield className="text-[#10B981] text-xl" />
            256-Bit Encrypted
          </div>
          <div className="hidden md:block w-px h-8 bg-[#04331A]/10"></div>
          <div className="flex items-center gap-3 text-[#04331A]/60 text-sm font-bold">
            <FiCreditCard className="text-[#10B981] text-xl" />
            Debit / Credit Card
          </div>
          <div className="hidden md:block w-px h-8 bg-[#04331A]/10"></div>
          <div className="flex items-center gap-3 text-[#04331A]/60 text-sm font-bold">
            <FiSmartphone className="text-[#10B981] text-xl" />
            Bank Transfer / USSD
          </div>
        </motion.div>
      </div>

      {/* --- HOW IT WORKS SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 z-10 relative mb-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="h-[2px] w-8 bg-[#10B981]"></div>
             <span className="text-[#10B981] font-black text-xs tracking-[0.2em] uppercase">The Architecture</span>
             <div className="h-[2px] w-8 bg-[#10B981]"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#04331A] tracking-tighter">Frictionless Process.</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative"
        >
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-[#10B981]/20 z-0"></div>

          {/* Step 1 */}
          <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(4,51,26,0.05)] border border-[#04331A]/5 hover:shadow-2xl hover:shadow-[#10B981]/10 hover:-translate-y-2 hover:border-[#10B981]/30 transition-all duration-300 group relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white border border-[#10B981]/20 shadow-md rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-300">
              <span className="text-2xl font-black text-[#04331A] group-hover:text-white">1</span>
            </div>
            <h3 className="text-xl font-black text-[#04331A] mb-3">Identity Verification</h3>
            <p className="text-[#04331A]/60 font-medium leading-relaxed text-sm">Enter your matric number. Our system instantly queries the database to auto-fill your exact dues requirement.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(4,51,26,0.05)] border border-[#04331A]/5 hover:shadow-2xl hover:shadow-[#10B981]/10 hover:-translate-y-2 hover:border-[#10B981]/30 transition-all duration-300 group relative z-10 flex flex-col items-center text-center">
            <div className="absolute -top-3 right-8 bg-[#10B981] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg animate-bounce">Zero Fees</div>
            <div className="w-16 h-16 bg-white border border-[#10B981]/20 shadow-md rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-300">
              <span className="text-2xl font-black text-[#04331A] group-hover:text-white">2</span>
            </div>
            <h3 className="text-xl font-black text-[#04331A] mb-3">Secure Checkout</h3>
            <p className="text-[#04331A]/60 font-medium leading-relaxed text-sm">Execute payment via our integrated gateway. Choose from card, USSD, or direct bank transfer options.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(4,51,26,0.05)] border border-[#04331A]/5 hover:shadow-2xl hover:shadow-[#10B981]/10 hover:-translate-y-2 hover:border-[#10B981]/30 transition-all duration-300 group relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white border border-[#10B981]/20 shadow-md rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-300">
              <span className="text-2xl font-black text-[#04331A] group-hover:text-white">3</span>
            </div>
            <h3 className="text-xl font-black text-[#04331A] mb-3">Automated Receipt</h3>
            <p className="text-[#04331A]/60 font-medium leading-relaxed text-sm">A digitally signed, watermarked PDF receipt is generated instantly and logged against your profile.</p>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default PayDuesPage;