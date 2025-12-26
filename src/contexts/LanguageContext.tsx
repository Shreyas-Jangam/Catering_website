import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.menu': 'Menu',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.callNow': 'Call Now',
    'nav.bookCatering': 'Book Catering',
    'nav.viewMenu': 'View Menu',
    'nav.whatsappNow': 'WhatsApp Now',
    
    // Hero Section
    'hero.title': 'Bittu Caterers',
    'hero.subtitle': 'Premium Catering for Weddings, Events & Celebrations',
    'hero.description': 'Delicious taste, professional service, beautiful presentation — we make your events memorable.',
    'hero.bookCatering': 'Book Catering',
    'hero.viewMenu': 'View Menu',
    'hero.scrollDown': 'Scroll Down',
    
    // Why Choose Us
    'whyUs.title': 'Why Choose',
    'whyUs.titleHighlight': 'Bittu Caterers',
    'whyUs.subtitle': 'We bring excellence to every event with our commitment to quality, hygiene, and exceptional service.',
    'whyUs.hygienic': 'Hygienic & Quality Food',
    'whyUs.hygienicDesc': 'We maintain the highest standards of hygiene and use only fresh, quality ingredients.',
    'whyUs.professional': 'Professional Team',
    'whyUs.professionalDesc': 'Our experienced team ensures seamless service at every event.',
    'whyUs.onTime': 'On-time Service',
    'whyUs.onTimeDesc': 'We value your time and guarantee punctual delivery and setup.',
    'whyUs.presentation': 'Beautiful Presentation',
    'whyUs.presentationDesc': 'Every dish is presented with elegance and attention to detail.',
    'whyUs.affordable': 'Affordable Premium',
    'whyUs.affordableDesc': 'Premium quality catering services at competitive prices.',
    'whyUs.customMenu': 'Custom Menus',
    'whyUs.customMenuDesc': 'Personalized menus tailored to your preferences and requirements.',
    
    // Services
    'services.title': 'Our',
    'services.titleHighlight': 'Services',
    'services.subtitle': 'From intimate gatherings to grand celebrations, we cater to all your event needs with perfection.',
    'services.wedding': 'Wedding Catering',
    'services.weddingDesc': 'Make your special day unforgettable with our exquisite wedding catering services.',
    'services.corporate': 'Corporate Events',
    'services.corporateDesc': 'Professional catering solutions for meetings, conferences, and corporate gatherings.',
    'services.birthday': 'Birthday Parties',
    'services.birthdayDesc': 'Celebrate birthdays with delicious food and memorable dining experiences.',
    'services.special': 'Special Events',
    'services.specialDesc': 'Custom catering for festivals, religious functions, and special occasions.',
    'services.learnMore': 'Learn More',
    
    // Menu Preview
    'menuPreview.title': 'Featured',
    'menuPreview.titleHighlight': 'Menu',
    'menuPreview.subtitle': 'Explore our diverse menu featuring authentic Indian cuisines crafted with love and tradition.',
    'menuPreview.punjabi': 'Punjabi Cuisine',
    'menuPreview.punjabiDesc': 'Rich and flavorful North Indian dishes',
    'menuPreview.southIndian': 'South Indian',
    'menuPreview.southIndianDesc': 'Authentic South Indian delicacies',
    'menuPreview.chinese': 'Chinese Cuisine',
    'menuPreview.chineseDesc': 'Indo-Chinese favorites',
    'menuPreview.desserts': 'Desserts',
    'menuPreview.dessertsDesc': 'Sweet endings to your meal',
    'menuPreview.viewFullMenu': 'View Full Menu',
    
    // Testimonials
    'testimonials.title': 'What Our',
    'testimonials.titleHighlight': 'Clients Say',
    'testimonials.subtitle': 'Don\'t just take our word for it — hear from our satisfied customers.',
    'testimonials.viewAll': 'View All Testimonials',
    
    // CTA
    'cta.title': 'Make Your Next Event',
    'cta.titleHighlight': 'Deliciously Memorable',
    'cta.subtitle': 'Let us bring our culinary expertise to your special occasion. Contact us today for a customized quote.',
    'cta.callNow': 'Call Now',
    'cta.getQuote': 'Get Quote',
    
    // Footer
    'footer.description': 'Premium catering services for weddings, corporate events, and special occasions. We bring delicious food and exceptional service to your doorstep.',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.contactInfo': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.address': 'Nagpur, Maharashtra, India',
    
    // About Page
    'about.heroTitle': 'About',
    'about.heroTitleHighlight': 'Bittu Caterers',
    'about.heroSubtitle': 'A legacy of taste, trust, and tradition in premium catering services.',
    'about.storyTitle': 'Our',
    'about.storyTitleHighlight': 'Story',
    'about.storyP1': 'Bittu Caterers was founded with a simple yet powerful vision: to bring exceptional culinary experiences to every celebration. What started as a small family-run catering service has grown into one of the most trusted names in the catering industry.',
    'about.storyP2': 'With over 15 years of experience, we have had the privilege of being part of countless weddings, corporate events, and special celebrations. Our journey has been fueled by our passion for food and our commitment to making every event memorable.',
    'about.storyP3': 'Today, we continue to uphold the values that have made us successful: quality ingredients, authentic recipes, professional service, and attention to every detail.',
    'about.experience': 'Years Experience',
    'about.eventsServed': 'Events Served',
    'about.happyClients': 'Happy Clients',
    'about.teamMembers': 'Team Members',
    'about.whyChooseTitle': 'Why Choose',
    'about.whyChooseTitleHighlight': 'Us',
    'about.missionTitle': 'Our',
    'about.missionTitleHighlight': 'Mission',
    'about.missionText': 'To deliver exceptional catering experiences that exceed expectations, celebrate traditions, and create lasting memories for every client we serve.',
    
    // Services Page
    'servicesPage.heroTitle': 'Our',
    'servicesPage.heroTitleHighlight': 'Services',
    'servicesPage.heroSubtitle': 'Comprehensive catering solutions for every occasion, crafted with excellence.',
    'servicesPage.weddingTitle': 'Wedding Catering',
    'servicesPage.weddingDesc': 'Make your wedding day truly unforgettable with our exquisite catering services. We understand that your wedding is one of the most important days of your life, and we bring our expertise to create a culinary experience that matches the grandeur of your celebration.',
    'servicesPage.weddingFeatures': 'Traditional & Contemporary Menu Options,Customized Wedding Packages,Experienced Wedding Catering Team,Beautiful Food Presentation,Live Cooking Stations,Multiple Cuisine Options',
    'servicesPage.corporateTitle': 'Corporate Events',
    'servicesPage.corporateDesc': 'Elevate your corporate events with our professional catering services. Whether it\'s a board meeting, conference, product launch, or annual gathering, we deliver impeccable service that reflects your company\'s standards.',
    'servicesPage.corporateFeatures': 'Professional Service Staff,On-Time Delivery Guaranteed,Customized Corporate Menus,Budget-Friendly Packages,Formal & Casual Options,Large Event Capacity',
    'servicesPage.birthdayTitle': 'Birthday Parties',
    'servicesPage.birthdayDesc': 'Celebrate birthdays with delicious food that everyone will love. From kids\' parties to milestone celebrations, we create menus that make every birthday special and memorable.',
    'servicesPage.birthdayFeatures': 'Kid-Friendly Menu Options,Theme-Based Catering,Cake & Dessert Arrangements,Fun Food Stations,Customized Party Packages,Indoor & Outdoor Setups',
    'servicesPage.specialTitle': 'Special Event Catering',
    'servicesPage.specialDesc': 'From religious ceremonies to festival celebrations, we provide specialized catering for all your special occasions. Our team understands the cultural significance of each event and prepares accordingly.',
    'servicesPage.specialFeatures': 'Festival & Religious Events,Engagement & Reception Parties,Anniversary Celebrations,Family Gatherings,Cultural Event Catering,Customized Traditional Menus',
    'servicesPage.keyFeatures': 'Key Features',
    'servicesPage.getQuote': 'Get Quote for This Service',
    
    // Menu Page
    'menuPage.heroTitle': 'Our',
    'menuPage.heroTitleHighlight': 'Menu',
    'menuPage.heroSubtitle': 'Explore our diverse collection of authentic cuisines crafted with love and tradition.',
    'menuPage.all': 'All',
    'menuPage.starters': 'Starters',
    'menuPage.mainCourse': 'Main Course',
    'menuPage.desserts': 'Desserts',
    'menuPage.beverages': 'Beverages',
    'menuPage.customMenu': 'Need a Custom Menu?',
    'menuPage.customMenuDesc': 'We can create personalized menus tailored to your event requirements and preferences.',
    'menuPage.requestCustom': 'Request Custom Menu',
    
    // Gallery Page
    'galleryPage.heroTitle': 'Our',
    'galleryPage.heroTitleHighlight': 'Gallery',
    'galleryPage.heroSubtitle': 'A glimpse into our culinary creations and event setups.',
    'galleryPage.all': 'All',
    'galleryPage.food': 'Food',
    'galleryPage.events': 'Events',
    'galleryPage.setup': 'Setup',
    
    // Testimonials Page
    'testimonialsPage.heroTitle': 'Client',
    'testimonialsPage.heroTitleHighlight': 'Testimonials',
    'testimonialsPage.heroSubtitle': 'Hear what our valued clients have to say about their experience with us.',
    'testimonialsPage.shareTitle': 'Share Your',
    'testimonialsPage.shareTitleHighlight': 'Experience',
    'testimonialsPage.shareDesc': 'We\'d love to hear about your experience with Bittu Caterers. Your feedback helps us improve and serve you better.',
    'testimonialsPage.shareButton': 'Share Your Testimonial',
    
    // Contact Page
    'contactPage.heroTitle': 'Contact',
    'contactPage.heroTitleHighlight': 'Us',
    'contactPage.heroSubtitle': 'Get in touch with us to discuss your catering needs.',
    'contactPage.getInTouch': 'Get In Touch',
    'contactPage.phone': 'Phone',
    'contactPage.email': 'Email',
    'contactPage.address': 'Address',
    'contactPage.hours': 'Business Hours',
    'contactPage.hoursValue': 'Mon - Sun: 8:00 AM - 10:00 PM',
    'contactPage.formTitle': 'Send Us a',
    'contactPage.formTitleHighlight': 'Message',
    'contactPage.formName': 'Your Name',
    'contactPage.formEmail': 'Email Address',
    'contactPage.formPhone': 'Phone Number',
    'contactPage.formEvent': 'Event Type',
    'contactPage.formEventPlaceholder': 'Select event type',
    'contactPage.formEventWedding': 'Wedding',
    'contactPage.formEventCorporate': 'Corporate Event',
    'contactPage.formEventBirthday': 'Birthday Party',
    'contactPage.formEventOther': 'Other',
    'contactPage.formGuests': 'Number of Guests',
    'contactPage.formDate': 'Event Date',
    'contactPage.formMessage': 'Your Message',
    'contactPage.formSubmit': 'Send Message',
    'contactPage.locationTitle': 'Our',
    'contactPage.locationTitleHighlight': 'Location',
    
    // Language
    'language.select': 'Language',
    'language.en': 'English',
    'language.hi': 'हिंदी',
    'language.mr': 'मराठी',
  },
  hi: {
    // Navbar
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएं',
    'nav.menu': 'मेन्यू',
    'nav.gallery': 'गैलरी',
    'nav.testimonials': 'प्रशंसापत्र',
    'nav.contact': 'संपर्क',
    'nav.callNow': 'अभी कॉल करें',
    'nav.bookCatering': 'केटरिंग बुक करें',
    'nav.viewMenu': 'मेन्यू देखें',
    'nav.whatsappNow': 'व्हाट्सएप करें',
    
    // Hero Section
    'hero.title': 'बिट्टू केटरर्स',
    'hero.subtitle': 'शादियों, इवेंट्स और समारोहों के लिए प्रीमियम केटरिंग',
    'hero.description': 'स्वादिष्ट भोजन, पेशेवर सेवा, सुंदर प्रस्तुति — हम आपके इवेंट को यादगार बनाते हैं।',
    'hero.bookCatering': 'केटरिंग बुक करें',
    'hero.viewMenu': 'मेन्यू देखें',
    'hero.scrollDown': 'नीचे स्क्रॉल करें',
    
    // Why Choose Us
    'whyUs.title': 'क्यों चुनें',
    'whyUs.titleHighlight': 'बिट्टू केटरर्स',
    'whyUs.subtitle': 'हम गुणवत्ता, स्वच्छता और उत्कृष्ट सेवा के प्रति अपनी प्रतिबद्धता के साथ हर इवेंट में उत्कृष्टता लाते हैं।',
    'whyUs.hygienic': 'स्वच्छ और गुणवत्तापूर्ण भोजन',
    'whyUs.hygienicDesc': 'हम स्वच्छता के उच्चतम मानकों को बनाए रखते हैं और केवल ताजी, गुणवत्तापूर्ण सामग्री का उपयोग करते हैं।',
    'whyUs.professional': 'पेशेवर टीम',
    'whyUs.professionalDesc': 'हमारी अनुभवी टीम हर इवेंट में निर्बाध सेवा सुनिश्चित करती है।',
    'whyUs.onTime': 'समय पर सेवा',
    'whyUs.onTimeDesc': 'हम आपके समय की कद्र करते हैं और समय पर डिलीवरी और सेटअप की गारंटी देते हैं।',
    'whyUs.presentation': 'सुंदर प्रस्तुति',
    'whyUs.presentationDesc': 'हर व्यंजन को शान और विस्तार से प्रस्तुत किया जाता है।',
    'whyUs.affordable': 'किफायती प्रीमियम',
    'whyUs.affordableDesc': 'प्रतिस्पर्धी कीमतों पर प्रीमियम गुणवत्ता केटरिंग सेवाएं।',
    'whyUs.customMenu': 'कस्टम मेन्यू',
    'whyUs.customMenuDesc': 'आपकी पसंद और आवश्यकताओं के अनुसार व्यक्तिगत मेन्यू।',
    
    // Services
    'services.title': 'हमारी',
    'services.titleHighlight': 'सेवाएं',
    'services.subtitle': 'छोटी मोहिमों से लेकर भव्य समारोहों तक, हम आपकी सभी इवेंट जरूरतों को पूर्णता के साथ पूरा करते हैं।',
    'services.wedding': 'शादी केटरिंग',
    'services.weddingDesc': 'हमारी उत्कृष्ट शादी केटरिंग सेवाओं के साथ अपने खास दिन को अविस्मरणीय बनाएं।',
    'services.corporate': 'कॉर्पोरेट इवेंट्स',
    'services.corporateDesc': 'मीटिंग्स, कॉन्फ्रेंस और कॉर्पोरेट समारोहों के लिए पेशेवर केटरिंग समाधान।',
    'services.birthday': 'जन्मदिन पार्टी',
    'services.birthdayDesc': 'स्वादिष्ट भोजन और यादगार भोजन अनुभवों के साथ जन्मदिन मनाएं।',
    'services.special': 'विशेष इवेंट्स',
    'services.specialDesc': 'त्योहारों, धार्मिक कार्यों और विशेष अवसरों के लिए कस्टम केटरिंग।',
    'services.learnMore': 'अधिक जानें',
    
    // Menu Preview
    'menuPreview.title': 'फीचर्ड',
    'menuPreview.titleHighlight': 'मेन्यू',
    'menuPreview.subtitle': 'प्यार और परंपरा से तैयार प्रामाणिक भारतीय व्यंजनों का हमारा विविध मेन्यू देखें।',
    'menuPreview.punjabi': 'पंजाबी व्यंजन',
    'menuPreview.punjabiDesc': 'समृद्ध और स्वादिष्ट उत्तर भारतीय व्यंजन',
    'menuPreview.southIndian': 'दक्षिण भारतीय',
    'menuPreview.southIndianDesc': 'प्रामाणिक दक्षिण भारतीय व्यंजन',
    'menuPreview.chinese': 'चाइनीज व्यंजन',
    'menuPreview.chineseDesc': 'इंडो-चाइनीज पसंदीदा',
    'menuPreview.desserts': 'मिठाइयां',
    'menuPreview.dessertsDesc': 'आपके भोजन का मीठा अंत',
    'menuPreview.viewFullMenu': 'पूरा मेन्यू देखें',
    
    // Testimonials
    'testimonials.title': 'हमारे',
    'testimonials.titleHighlight': 'ग्राहक क्या कहते हैं',
    'testimonials.subtitle': 'सिर्फ हमारी बात न मानें — हमारे संतुष्ट ग्राहकों से सुनें।',
    'testimonials.viewAll': 'सभी प्रशंसापत्र देखें',
    
    // CTA
    'cta.title': 'अपने अगले इवेंट को',
    'cta.titleHighlight': 'स्वादिष्ट रूप से यादगार बनाएं',
    'cta.subtitle': 'हमें अपने विशेष अवसर पर अपनी पाक विशेषज्ञता लाने दें। कस्टमाइज्ड कोटेशन के लिए आज ही संपर्क करें।',
    'cta.callNow': 'अभी कॉल करें',
    'cta.getQuote': 'कोट प्राप्त करें',
    
    // Footer
    'footer.description': 'शादियों, कॉर्पोरेट इवेंट्स और विशेष अवसरों के लिए प्रीमियम केटरिंग सेवाएं। हम स्वादिष्ट भोजन और उत्कृष्ट सेवा आपके द्वार तक लाते हैं।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.ourServices': 'हमारी सेवाएं',
    'footer.contactInfo': 'संपर्क जानकारी',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    'footer.address': 'नागपुर, महाराष्ट्र, भारत',
    
    // About Page
    'about.heroTitle': 'बिट्टू केटरर्स',
    'about.heroTitleHighlight': 'के बारे में',
    'about.heroSubtitle': 'प्रीमियम केटरिंग सेवाओं में स्वाद, विश्वास और परंपरा की विरासत।',
    'about.storyTitle': 'हमारी',
    'about.storyTitleHighlight': 'कहानी',
    'about.storyP1': 'बिट्टू केटरर्स की स्थापना एक सरल लेकिन शक्तिशाली दृष्टिकोण के साथ की गई थी: हर समारोह में असाधारण पाक अनुभव लाना। जो एक छोटी पारिवारिक केटरिंग सेवा के रूप में शुरू हुई, वह केटरिंग उद्योग में सबसे विश्वसनीय नामों में से एक बन गई है।',
    'about.storyP2': '15 से अधिक वर्षों के अनुभव के साथ, हमें अनगिनत शादियों, कॉर्पोरेट इवेंट्स और विशेष समारोहों का हिस्सा बनने का सौभाग्य मिला है। हमारी यात्रा भोजन के प्रति हमारे जुनून और हर इवेंट को यादगार बनाने की हमारी प्रतिबद्धता से प्रेरित रही है।',
    'about.storyP3': 'आज, हम उन मूल्यों को कायम रखते हैं जिन्होंने हमें सफल बनाया है: गुणवत्तापूर्ण सामग्री, प्रामाणिक व्यंजन, पेशेवर सेवा और हर विवरण पर ध्यान।',
    'about.experience': 'वर्षों का अनुभव',
    'about.eventsServed': 'इवेंट्स सर्व किए',
    'about.happyClients': 'खुश ग्राहक',
    'about.teamMembers': 'टीम सदस्य',
    'about.whyChooseTitle': 'हमें क्यों',
    'about.whyChooseTitleHighlight': 'चुनें',
    'about.missionTitle': 'हमारा',
    'about.missionTitleHighlight': 'मिशन',
    'about.missionText': 'असाधारण केटरिंग अनुभव प्रदान करना जो अपेक्षाओं से अधिक हो, परंपराओं का जश्न मनाए और हमारे हर ग्राहक के लिए स्थायी यादें बनाए।',
    
    // Services Page
    'servicesPage.heroTitle': 'हमारी',
    'servicesPage.heroTitleHighlight': 'सेवाएं',
    'servicesPage.heroSubtitle': 'उत्कृष्टता के साथ तैयार हर अवसर के लिए व्यापक केटरिंग समाधान।',
    'servicesPage.weddingTitle': 'शादी केटरिंग',
    'servicesPage.weddingDesc': 'हमारी उत्कृष्ट केटरिंग सेवाओं के साथ अपने शादी के दिन को वास्तव में अविस्मरणीय बनाएं। हम समझते हैं कि आपकी शादी आपके जीवन के सबसे महत्वपूर्ण दिनों में से एक है, और हम आपके समारोह की भव्यता से मेल खाने वाला पाक अनुभव बनाने के लिए अपनी विशेषज्ञता लाते हैं।',
    'servicesPage.weddingFeatures': 'पारंपरिक और आधुनिक मेन्यू विकल्प,अनुकूलित शादी पैकेज,अनुभवी शादी केटरिंग टीम,सुंदर भोजन प्रस्तुति,लाइव कुकिंग स्टेशन,कई व्यंजन विकल्प',
    'servicesPage.corporateTitle': 'कॉर्पोरेट इवेंट्स',
    'servicesPage.corporateDesc': 'हमारी पेशेवर केटरिंग सेवाओं के साथ अपने कॉर्पोरेट इवेंट्स को ऊंचा उठाएं। चाहे वह बोर्ड मीटिंग हो, कॉन्फ्रेंस हो, प्रोडक्ट लॉन्च हो या वार्षिक समारोह, हम निर्दोष सेवा प्रदान करते हैं जो आपकी कंपनी के मानकों को दर्शाती है।',
    'servicesPage.corporateFeatures': 'पेशेवर सेवा स्टाफ,समय पर डिलीवरी की गारंटी,अनुकूलित कॉर्पोरेट मेन्यू,बजट-अनुकूल पैकेज,औपचारिक और अनौपचारिक विकल्प,बड़े इवेंट की क्षमता',
    'servicesPage.birthdayTitle': 'जन्मदिन पार्टी',
    'servicesPage.birthdayDesc': 'स्वादिष्ट भोजन के साथ जन्मदिन मनाएं जो सभी को पसंद आएगा। बच्चों की पार्टियों से लेकर माइलस्टोन समारोहों तक, हम ऐसे मेन्यू बनाते हैं जो हर जन्मदिन को विशेष और यादगार बनाते हैं।',
    'servicesPage.birthdayFeatures': 'बच्चों के अनुकूल मेन्यू विकल्प,थीम-आधारित केटरिंग,केक और मिठाई व्यवस्था,मजेदार फूड स्टेशन,अनुकूलित पार्टी पैकेज,इनडोर और आउटडोर सेटअप',
    'servicesPage.specialTitle': 'विशेष इवेंट केटरिंग',
    'servicesPage.specialDesc': 'धार्मिक समारोहों से लेकर त्योहार के जश्न तक, हम आपके सभी विशेष अवसरों के लिए विशेष केटरिंग प्रदान करते हैं। हमारी टीम हर इवेंट के सांस्कृतिक महत्व को समझती है और उसके अनुसार तैयारी करती है।',
    'servicesPage.specialFeatures': 'त्योहार और धार्मिक इवेंट्स,सगाई और रिसेप्शन पार्टी,सालगिरह समारोह,पारिवारिक समारोह,सांस्कृतिक इवेंट केटरिंग,अनुकूलित पारंपरिक मेन्यू',
    'servicesPage.keyFeatures': 'मुख्य विशेषताएं',
    'servicesPage.getQuote': 'इस सेवा के लिए कोट प्राप्त करें',
    
    // Menu Page
    'menuPage.heroTitle': 'हमारा',
    'menuPage.heroTitleHighlight': 'मेन्यू',
    'menuPage.heroSubtitle': 'प्यार और परंपरा से तैयार प्रामाणिक व्यंजनों का हमारा विविध संग्रह देखें।',
    'menuPage.all': 'सभी',
    'menuPage.starters': 'स्टार्टर्स',
    'menuPage.mainCourse': 'मेन कोर्स',
    'menuPage.desserts': 'मिठाइयां',
    'menuPage.beverages': 'पेय पदार्थ',
    'menuPage.customMenu': 'कस्टम मेन्यू चाहिए?',
    'menuPage.customMenuDesc': 'हम आपके इवेंट की आवश्यकताओं और पसंद के अनुसार व्यक्तिगत मेन्यू बना सकते हैं।',
    'menuPage.requestCustom': 'कस्टम मेन्यू अनुरोध करें',
    
    // Gallery Page
    'galleryPage.heroTitle': 'हमारी',
    'galleryPage.heroTitleHighlight': 'गैलरी',
    'galleryPage.heroSubtitle': 'हमारी पाक कृतियों और इवेंट सेटअप की एक झलक।',
    'galleryPage.all': 'सभी',
    'galleryPage.food': 'भोजन',
    'galleryPage.events': 'इवेंट्स',
    'galleryPage.setup': 'सेटअप',
    
    // Testimonials Page
    'testimonialsPage.heroTitle': 'ग्राहक',
    'testimonialsPage.heroTitleHighlight': 'प्रशंसापत्र',
    'testimonialsPage.heroSubtitle': 'सुनें हमारे मूल्यवान ग्राहकों ने हमारे साथ अपने अनुभव के बारे में क्या कहा।',
    'testimonialsPage.shareTitle': 'अपना',
    'testimonialsPage.shareTitleHighlight': 'अनुभव साझा करें',
    'testimonialsPage.shareDesc': 'हम बिट्टू केटरर्स के साथ आपके अनुभव के बारे में सुनना पसंद करेंगे। आपकी प्रतिक्रिया हमें सुधारने और आपकी बेहतर सेवा करने में मदद करती है।',
    'testimonialsPage.shareButton': 'अपना प्रशंसापत्र साझा करें',
    
    // Contact Page
    'contactPage.heroTitle': 'संपर्क',
    'contactPage.heroTitleHighlight': 'करें',
    'contactPage.heroSubtitle': 'अपनी केटरिंग जरूरतों पर चर्चा करने के लिए हमसे संपर्क करें।',
    'contactPage.getInTouch': 'संपर्क करें',
    'contactPage.phone': 'फोन',
    'contactPage.email': 'ईमेल',
    'contactPage.address': 'पता',
    'contactPage.hours': 'व्यापार के घंटे',
    'contactPage.hoursValue': 'सोम - रवि: सुबह 8:00 - रात 10:00 बजे',
    'contactPage.formTitle': 'हमें एक',
    'contactPage.formTitleHighlight': 'संदेश भेजें',
    'contactPage.formName': 'आपका नाम',
    'contactPage.formEmail': 'ईमेल पता',
    'contactPage.formPhone': 'फोन नंबर',
    'contactPage.formEvent': 'इवेंट प्रकार',
    'contactPage.formEventPlaceholder': 'इवेंट प्रकार चुनें',
    'contactPage.formEventWedding': 'शादी',
    'contactPage.formEventCorporate': 'कॉर्पोरेट इवेंट',
    'contactPage.formEventBirthday': 'जन्मदिन पार्टी',
    'contactPage.formEventOther': 'अन्य',
    'contactPage.formGuests': 'मेहमानों की संख्या',
    'contactPage.formDate': 'इवेंट की तारीख',
    'contactPage.formMessage': 'आपका संदेश',
    'contactPage.formSubmit': 'संदेश भेजें',
    'contactPage.locationTitle': 'हमारा',
    'contactPage.locationTitleHighlight': 'स्थान',
    
    // Language
    'language.select': 'भाषा',
    'language.en': 'English',
    'language.hi': 'हिंदी',
    'language.mr': 'मराठी',
  },
  mr: {
    // Navbar
    'nav.about': 'आमच्याबद्दल',
    'nav.services': 'सेवा',
    'nav.menu': 'मेन्यू',
    'nav.gallery': 'गॅलरी',
    'nav.testimonials': 'अभिप्राय',
    'nav.contact': 'संपर्क',
    'nav.callNow': 'आता कॉल करा',
    'nav.bookCatering': 'केटरिंग बुक करा',
    'nav.viewMenu': 'मेन्यू पहा',
    'nav.whatsappNow': 'व्हाट्सएप करा',
    
    // Hero Section
    'hero.title': 'बिट्टू केटरर्स',
    'hero.subtitle': 'लग्न, कार्यक्रम आणि उत्सवांसाठी प्रीमियम केटरिंग',
    'hero.description': 'स्वादिष्ट चव, व्यावसायिक सेवा, सुंदर सादरीकरण — आम्ही तुमचे कार्यक्रम अविस्मरणीय बनवतो.',
    'hero.bookCatering': 'केटरिंग बुक करा',
    'hero.viewMenu': 'मेन्यू पहा',
    'hero.scrollDown': 'खाली स्क्रोल करा',
    
    // Why Choose Us
    'whyUs.title': 'का निवडावे',
    'whyUs.titleHighlight': 'बिट्टू केटरर्स',
    'whyUs.subtitle': 'गुणवत्ता, स्वच्छता आणि उत्कृष्ट सेवेच्या प्रति आमच्या वचनबद्धतेसह आम्ही प्रत्येक कार्यक्रमात उत्कृष्टता आणतो.',
    'whyUs.hygienic': 'स्वच्छ आणि गुणवत्तापूर्ण अन्न',
    'whyUs.hygienicDesc': 'आम्ही स्वच्छतेचे उच्च मानक राखतो आणि केवळ ताजे, गुणवत्तापूर्ण साहित्य वापरतो.',
    'whyUs.professional': 'व्यावसायिक टीम',
    'whyUs.professionalDesc': 'आमची अनुभवी टीम प्रत्येक कार्यक्रमात निर्दोष सेवा सुनिश्चित करते.',
    'whyUs.onTime': 'वेळेवर सेवा',
    'whyUs.onTimeDesc': 'आम्ही तुमच्या वेळेची कदर करतो आणि वेळेवर डिलिव्हरी आणि सेटअपची हमी देतो.',
    'whyUs.presentation': 'सुंदर सादरीकरण',
    'whyUs.presentationDesc': 'प्रत्येक पदार्थ शान आणि तपशीलाने सादर केला जातो.',
    'whyUs.affordable': 'परवडणारे प्रीमियम',
    'whyUs.affordableDesc': 'स्पर्धात्मक किमतींवर प्रीमियम गुणवत्ता केटरिंग सेवा.',
    'whyUs.customMenu': 'कस्टम मेन्यू',
    'whyUs.customMenuDesc': 'तुमच्या पसंती आणि गरजांनुसार वैयक्तिक मेन्यू.',
    
    // Services
    'services.title': 'आमच्या',
    'services.titleHighlight': 'सेवा',
    'services.subtitle': 'लहान मेळाव्यांपासून भव्य समारंभांपर्यंत, आम्ही तुमच्या सर्व कार्यक्रमांच्या गरजा पूर्णतेने पूर्ण करतो.',
    'services.wedding': 'लग्न केटरिंग',
    'services.weddingDesc': 'आमच्या उत्कृष्ट लग्न केटरिंग सेवांसह तुमचा खास दिवस अविस्मरणीय बनवा.',
    'services.corporate': 'कॉर्पोरेट कार्यक्रम',
    'services.corporateDesc': 'मीटिंग्स, कॉन्फरन्स आणि कॉर्पोरेट समारंभांसाठी व्यावसायिक केटरिंग उपाय.',
    'services.birthday': 'वाढदिवस पार्टी',
    'services.birthdayDesc': 'स्वादिष्ट अन्न आणि अविस्मरणीय जेवणाच्या अनुभवांसह वाढदिवस साजरा करा.',
    'services.special': 'विशेष कार्यक्रम',
    'services.specialDesc': 'सण, धार्मिक कार्यक्रम आणि विशेष प्रसंगांसाठी कस्टम केटरिंग.',
    'services.learnMore': 'अधिक जाणून घ्या',
    
    // Menu Preview
    'menuPreview.title': 'वैशिष्ट्यपूर्ण',
    'menuPreview.titleHighlight': 'मेन्यू',
    'menuPreview.subtitle': 'प्रेम आणि परंपरेने तयार केलेल्या प्रामाणिक भारतीय पदार्थांचा आमचा वैविध्यपूर्ण मेन्यू पहा.',
    'menuPreview.punjabi': 'पंजाबी पदार्थ',
    'menuPreview.punjabiDesc': 'समृद्ध आणि स्वादिष्ट उत्तर भारतीय पदार्थ',
    'menuPreview.southIndian': 'दक्षिण भारतीय',
    'menuPreview.southIndianDesc': 'प्रामाणिक दक्षिण भारतीय पदार्थ',
    'menuPreview.chinese': 'चायनीज पदार्थ',
    'menuPreview.chineseDesc': 'इंडो-चायनीज आवडते',
    'menuPreview.desserts': 'मिठाई',
    'menuPreview.dessertsDesc': 'तुमच्या जेवणाचा गोड शेवट',
    'menuPreview.viewFullMenu': 'संपूर्ण मेन्यू पहा',
    
    // Testimonials
    'testimonials.title': 'आमचे',
    'testimonials.titleHighlight': 'ग्राहक काय म्हणतात',
    'testimonials.subtitle': 'फक्त आमचे म्हणणे मानू नका — आमच्या समाधानी ग्राहकांकडून ऐका.',
    'testimonials.viewAll': 'सर्व अभिप्राय पहा',
    
    // CTA
    'cta.title': 'तुमचा पुढचा कार्यक्रम',
    'cta.titleHighlight': 'स्वादिष्टपणे अविस्मरणीय बनवा',
    'cta.subtitle': 'आम्हाला तुमच्या विशेष प्रसंगी आमचे पाककला कौशल्य आणू द्या. सानुकूलित कोटसाठी आज संपर्क साधा.',
    'cta.callNow': 'आता कॉल करा',
    'cta.getQuote': 'कोट मिळवा',
    
    // Footer
    'footer.description': 'लग्न, कॉर्पोरेट कार्यक्रम आणि विशेष प्रसंगांसाठी प्रीमियम केटरिंग सेवा. आम्ही स्वादिष्ट अन्न आणि उत्कृष्ट सेवा तुमच्या दारापर्यंत पोहोचवतो.',
    'footer.quickLinks': 'द्रुत दुवे',
    'footer.ourServices': 'आमच्या सेवा',
    'footer.contactInfo': 'संपर्क माहिती',
    'footer.rights': 'सर्व हक्क राखीव.',
    'footer.address': 'नागपूर, महाराष्ट्र, भारत',
    
    // About Page
    'about.heroTitle': 'बिट्टू केटरर्स',
    'about.heroTitleHighlight': 'बद्दल',
    'about.heroSubtitle': 'प्रीमियम केटरिंग सेवांमध्ये चव, विश्वास आणि परंपरेचा वारसा.',
    'about.storyTitle': 'आमची',
    'about.storyTitleHighlight': 'कथा',
    'about.storyP1': 'बिट्टू केटरर्सची स्थापना एका सोप्या पण शक्तिशाली दृष्टीकोनासह केली गेली: प्रत्येक समारंभात असाधारण पाककला अनुभव आणणे. जे एक लहान कौटुंबिक केटरिंग सेवा म्हणून सुरू झाले, ते केटरिंग उद्योगातील सर्वात विश्वासार्ह नावांपैकी एक बनले आहे.',
    'about.storyP2': '15 वर्षांहून अधिक अनुभवासह, आम्हाला अनेक लग्न, कॉर्पोरेट कार्यक्रम आणि विशेष समारंभांचा भाग होण्याचे भाग्य लाभले आहे. आमचा प्रवास अन्नाबद्दलच्या आमच्या आवडीने आणि प्रत्येक कार्यक्रम अविस्मरणीय बनवण्याच्या आमच्या वचनबद्धतेने प्रेरित झाला आहे.',
    'about.storyP3': 'आज, आम्ही ती मूल्ये कायम ठेवतो ज्यांनी आम्हाला यशस्वी केले: गुणवत्तापूर्ण साहित्य, प्रामाणिक पाककृती, व्यावसायिक सेवा आणि प्रत्येक तपशीलाकडे लक्ष.',
    'about.experience': 'वर्षांचा अनुभव',
    'about.eventsServed': 'कार्यक्रम सेवा दिलेले',
    'about.happyClients': 'आनंदी ग्राहक',
    'about.teamMembers': 'टीम सदस्य',
    'about.whyChooseTitle': 'आम्हाला का',
    'about.whyChooseTitleHighlight': 'निवडावे',
    'about.missionTitle': 'आमचे',
    'about.missionTitleHighlight': 'ध्येय',
    'about.missionText': 'असाधारण केटरिंग अनुभव देणे जे अपेक्षांपेक्षा जास्त असेल, परंपरांचा उत्सव साजरा करेल आणि आम्ही सेवा देतो त्या प्रत्येक ग्राहकासाठी कायमस्वरूपी आठवणी निर्माण करेल.',
    
    // Services Page
    'servicesPage.heroTitle': 'आमच्या',
    'servicesPage.heroTitleHighlight': 'सेवा',
    'servicesPage.heroSubtitle': 'उत्कृष्टतेने तयार केलेले प्रत्येक प्रसंगासाठी सर्वसमावेशक केटरिंग उपाय.',
    'servicesPage.weddingTitle': 'लग्न केटरिंग',
    'servicesPage.weddingDesc': 'आमच्या उत्कृष्ट केटरिंग सेवांसह तुमचा लग्नाचा दिवस खरोखर अविस्मरणीय बनवा. आम्ही समजतो की तुमचे लग्न तुमच्या आयुष्यातील सर्वात महत्त्वाच्या दिवसांपैकी एक आहे, आणि आम्ही तुमच्या समारंभाच्या भव्यतेशी जुळणारा पाककला अनुभव तयार करण्यासाठी आमचे कौशल्य आणतो.',
    'servicesPage.weddingFeatures': 'पारंपारिक आणि आधुनिक मेन्यू पर्याय,सानुकूलित लग्न पॅकेजेस,अनुभवी लग्न केटरिंग टीम,सुंदर अन्न सादरीकरण,लाइव्ह कुकिंग स्टेशन्स,अनेक पाककृती पर्याय',
    'servicesPage.corporateTitle': 'कॉर्पोरेट कार्यक्रम',
    'servicesPage.corporateDesc': 'आमच्या व्यावसायिक केटरिंग सेवांसह तुमचे कॉर्पोरेट कार्यक्रम उंचावा. बोर्ड मीटिंग असो, कॉन्फरन्स असो, प्रॉडक्ट लॉन्च असो किंवा वार्षिक समारंभ असो, आम्ही तुमच्या कंपनीच्या मानकांचे प्रतिबिंब दर्शवणारी निर्दोष सेवा देतो.',
    'servicesPage.corporateFeatures': 'व्यावसायिक सेवा कर्मचारी,वेळेवर डिलिव्हरीची हमी,सानुकूलित कॉर्पोरेट मेन्यू,बजेट-अनुकूल पॅकेजेस,औपचारिक आणि अनौपचारिक पर्याय,मोठ्या कार्यक्रमाची क्षमता',
    'servicesPage.birthdayTitle': 'वाढदिवस पार्टी',
    'servicesPage.birthdayDesc': 'सर्वांना आवडेल अशा स्वादिष्ट अन्नासह वाढदिवस साजरा करा. मुलांच्या पार्ट्यांपासून ते महत्त्वाच्या समारंभांपर्यंत, आम्ही असे मेन्यू तयार करतो जे प्रत्येक वाढदिवस खास आणि अविस्मरणीय बनवतात.',
    'servicesPage.birthdayFeatures': 'मुलांसाठी अनुकूल मेन्यू पर्याय,थीम-आधारित केटरिंग,केक आणि मिठाई व्यवस्था,मजेदार फूड स्टेशन्स,सानुकूलित पार्टी पॅकेजेस,इनडोअर आणि आउटडोअर सेटअप',
    'servicesPage.specialTitle': 'विशेष कार्यक्रम केटरिंग',
    'servicesPage.specialDesc': 'धार्मिक समारंभांपासून ते सणांच्या उत्सवांपर्यंत, आम्ही तुमच्या सर्व विशेष प्रसंगांसाठी विशेष केटरिंग प्रदान करतो. आमची टीम प्रत्येक कार्यक्रमाचे सांस्कृतिक महत्त्व समजते आणि त्यानुसार तयारी करते.',
    'servicesPage.specialFeatures': 'सण आणि धार्मिक कार्यक्रम,साखरपुडा आणि रिसेप्शन पार्टी,वाढदिवस समारंभ,कौटुंबिक मेळावे,सांस्कृतिक कार्यक्रम केटरिंग,सानुकूलित पारंपारिक मेन्यू',
    'servicesPage.keyFeatures': 'मुख्य वैशिष्ट्ये',
    'servicesPage.getQuote': 'या सेवेसाठी कोट मिळवा',
    
    // Menu Page
    'menuPage.heroTitle': 'आमचा',
    'menuPage.heroTitleHighlight': 'मेन्यू',
    'menuPage.heroSubtitle': 'प्रेम आणि परंपरेने तयार केलेल्या प्रामाणिक पाककृतींचा आमचा वैविध्यपूर्ण संग्रह पहा.',
    'menuPage.all': 'सर्व',
    'menuPage.starters': 'स्टार्टर्स',
    'menuPage.mainCourse': 'मेन कोर्स',
    'menuPage.desserts': 'मिठाई',
    'menuPage.beverages': 'पेये',
    'menuPage.customMenu': 'कस्टम मेन्यू हवा?',
    'menuPage.customMenuDesc': 'आम्ही तुमच्या कार्यक्रमाच्या गरजा आणि पसंतीनुसार वैयक्तिक मेन्यू तयार करू शकतो.',
    'menuPage.requestCustom': 'कस्टम मेन्यू विनंती करा',
    
    // Gallery Page
    'galleryPage.heroTitle': 'आमची',
    'galleryPage.heroTitleHighlight': 'गॅलरी',
    'galleryPage.heroSubtitle': 'आमच्या पाककला निर्मिती आणि कार्यक्रम सेटअपची झलक.',
    'galleryPage.all': 'सर्व',
    'galleryPage.food': 'अन्न',
    'galleryPage.events': 'कार्यक्रम',
    'galleryPage.setup': 'सेटअप',
    
    // Testimonials Page
    'testimonialsPage.heroTitle': 'ग्राहक',
    'testimonialsPage.heroTitleHighlight': 'अभिप्राय',
    'testimonialsPage.heroSubtitle': 'आमच्या मौल्यवान ग्राहकांनी आमच्याबरोबरच्या त्यांच्या अनुभवाबद्दल काय म्हटले ते ऐका.',
    'testimonialsPage.shareTitle': 'तुमचा',
    'testimonialsPage.shareTitleHighlight': 'अनुभव सांगा',
    'testimonialsPage.shareDesc': 'बिट्टू केटरर्ससोबतच्या तुमच्या अनुभवाबद्दल आम्हाला ऐकायला आवडेल. तुमचा अभिप्राय आम्हाला सुधारण्यास आणि तुम्हाला चांगली सेवा देण्यास मदत करतो.',
    'testimonialsPage.shareButton': 'तुमचा अभिप्राय सांगा',
    
    // Contact Page
    'contactPage.heroTitle': 'संपर्क',
    'contactPage.heroTitleHighlight': 'करा',
    'contactPage.heroSubtitle': 'तुमच्या केटरिंग गरजांवर चर्चा करण्यासाठी आमच्याशी संपर्क साधा.',
    'contactPage.getInTouch': 'संपर्कात रहा',
    'contactPage.phone': 'फोन',
    'contactPage.email': 'ईमेल',
    'contactPage.address': 'पत्ता',
    'contactPage.hours': 'व्यवसायाचे तास',
    'contactPage.hoursValue': 'सोम - रवि: सकाळी 8:00 - रात्री 10:00 वाजता',
    'contactPage.formTitle': 'आम्हाला एक',
    'contactPage.formTitleHighlight': 'संदेश पाठवा',
    'contactPage.formName': 'तुमचे नाव',
    'contactPage.formEmail': 'ईमेल पत्ता',
    'contactPage.formPhone': 'फोन नंबर',
    'contactPage.formEvent': 'कार्यक्रमाचा प्रकार',
    'contactPage.formEventPlaceholder': 'कार्यक्रमाचा प्रकार निवडा',
    'contactPage.formEventWedding': 'लग्न',
    'contactPage.formEventCorporate': 'कॉर्पोरेट कार्यक्रम',
    'contactPage.formEventBirthday': 'वाढदिवस पार्टी',
    'contactPage.formEventOther': 'इतर',
    'contactPage.formGuests': 'पाहुण्यांची संख्या',
    'contactPage.formDate': 'कार्यक्रमाची तारीख',
    'contactPage.formMessage': 'तुमचा संदेश',
    'contactPage.formSubmit': 'संदेश पाठवा',
    'contactPage.locationTitle': 'आमचे',
    'contactPage.locationTitleHighlight': 'स्थान',
    
    // Language
    'language.select': 'भाषा',
    'language.en': 'English',
    'language.hi': 'हिंदी',
    'language.mr': 'मराठी',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
