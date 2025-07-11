import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send('service_fdzng2l', 'template_fd9q1t8', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      }, 'fZmaz6qlzNNn19Aku');
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <PageTransition>
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to work together? Let's discuss your next project
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors" placeholder="your.email@example.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors" placeholder="What's this about?" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell me about your project..." required />
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-none py-3 text-lg disabled:opacity-50">
                    <Send className="mr-2 h-5 w-5" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Let's Connect
                </h2>
                <p className="text-gray-300 mb-8">
                  I'm always interested in hearing about new opportunities and interesting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{
                x: 5
              }} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-gray-300">rimzy2002rr@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{
                x: 5
              }} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-gray-300">+94 77 459 6091</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{
                x: 5
              }} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-gray-300">Ampara, Sri Lanka</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
                <div className="flex space-x-4">
                  {["Github", "Linkedin", "Instagram", "Youtube"].map((platform, index) => <motion.a key={platform} href={platform === "Instagram" ? "https://www.instagram.com/rimzy_ry" : "#"} initial={{
                  opacity: 0,
                  scale: 0.5
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1
                }} whileHover={{
                  scale: 1.1,
                  y: -2
                }} className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300">
                      {platform === "Instagram" ? "R" : platform.charAt(0)}
                    </motion.a>)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>;
};
export default Contact;