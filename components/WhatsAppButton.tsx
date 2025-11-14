import React from 'react';
import { USER_INFO } from '../constants';
import WhatsAppIcon from './icons/WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
    if (!USER_INFO.whatsappNumber) {
        return null;
    }

    const whatsappUrl = `https://wa.me/${USER_INFO.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(USER_INFO.whatsappMessage)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-green-600"
            aria-label="Entrar em contato pelo WhatsApp"
        >
            <WhatsAppIcon className="w-7 h-7" />
        </a>
    );
};

export default WhatsAppButton;