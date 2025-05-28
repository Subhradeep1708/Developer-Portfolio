import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="py-10 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">


            <p className="text-muted-foreground mb-4">
                &copy; {new Date().getFullYear()} Subhradeep Sardar. All rights reserved.
            <p className="text-muted-foreground mb-4">
                Built with ❤️ using React and Tailwind CSS
            </p>
            </p>

            <a
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
                <ArrowUp size={20} />
            </a>

        </footer>
    )
}

export default Footer
