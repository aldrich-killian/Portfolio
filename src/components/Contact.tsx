import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";

import {EMAIL, TALLY_FORM_URL} from "../utils/constants";

const Contact = () => {
  
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8`}>
            <div>
              <h2 className="text-5xl font-bold mb-6">Contact details</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md border border-gray-200 dark:border-gray-700">
                  <Mail className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{EMAIL}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md border border-gray-200 dark:border-gray-700">
                  <MapPin className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                </div> */}
                {/* <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Rajpura, Punjab, India</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Content - CTA Card */}
          <div
            className={`glass-card rounded-3xl p-8 md:p-12 shadow-2xl text-center space-y-6`}
          >
            <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center mx-auto">
              <MessageCircle className="w-10 h-10 text-background" />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-3">Contact form</h3>

              <p className="text-muted-foreground">
                Share some details about your request, and I’ll get back to you.
              </p>
            </div>
            <a href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="rounded-full gap-2 px-8 py-6 mt-4   text-base font-medium"
              >
                Open Contact Form
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            {/* <p className="text-sm text-muted-foreground">Opens in a new tab</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
