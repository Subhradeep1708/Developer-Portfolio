import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import { cn } from "../lib/utils";
import { useToast } from './hooks/use-toast';



const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const form = React.useRef(null);
    const [result, setResult] = React.useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key","b8548bd5-ce87-472a-9dcb-26491f398f10");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            // event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent !",
                description: "Thank you for reaching out! I'll get back to you soon.",
                variant: "success",
            });
            setIsSubmitting(false);
            if (form.current) {
                form.current.reset();
            }
        }, 1500);
    }

    return (
        <section id="contact" className='py-24 px-4 relative bg-secondary/30'>

            <div className="conatiner mx-auto max-w-5xl">

                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary' > Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        <div className='space-y-6 justify-center '>
                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>

                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:hello@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        hello@gmail.com
                                    </a>

                                </div>

                            </div>
                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>

                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+911234567890" className='text-muted-foreground hover:text-primary transition-colors'>
                                        +911234567890
                                    </a>

                                </div>
                                {/* Location */}
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>

                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors cursor-pointer'>
                                        West bengal, India
                                    </a>

                                </div>

                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target='_blank'>
                                    <Linkedin />
                                </a>
                                <a href="#" target='_blank'>
                                    <Instagram />
                                </a>
                                <a href="#" target='_blank'>
                                    <Github />
                                </a>
                                <a href="#" target='_blank'>
                                    <Facebook />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form className='space-y-6' ref={form} onSubmit={handleSubmit}>
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className='w-full px-4 py-3 border border-input rounded-md  bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder='Enter your name'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className='w-full px-4 py-3 border border-input rounded-md  bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder='Enter your email'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                                <textarea id="message" name="message" rows="4" required
                                    className='w-full px-4 py-3 border border-input rounded-md  bg-background focus:outline-none focus:ring-2 
                                    focus:ring-primary'
                                    placeholder='Type your message here...'
                                ></textarea>
                            </div>

                            <button type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}>
                                {isSubmitting ? "Submitting..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactSection
