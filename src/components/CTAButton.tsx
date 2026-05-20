import { useState } from 'react';
import EmailCapture from './EmailCapture';
import { ArrowRight } from 'lucide-react';

type Plan = 'HOB' | 'PRO' | 'ULTRA' | null;
type Lang = 'es' | 'en';
type Variant = 'primary' | 'secondary';

interface Props {
  label: string;
  lang?: Lang;
  plan?: Plan;
  source: string;
  section?: string;
  href?: string;
  variant?: Variant;
  showArrow?: boolean;
  trackEvent?: string;
}

export default function CTAButton({
  label,
  lang = 'es',
  plan = null,
  source,
  section = '',
  href,
  variant = 'primary',
  showArrow = false,
  trackEvent = 'cta_click',
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const track = () => {
    if ((window as any).mixpanel) {
      (window as any).mixpanel.track(trackEvent, {
        cta_label: label,
        section,
        page: window.location.pathname,
        lang,
        plan,
      });
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
        onClick={track}
        style={{ display: 'inline-flex', alignItems: 'center', gap: showArrow ? '0.5rem' : 0 }}
      >
        {label}
        {showArrow && <ArrowRight size={16} />}
      </a>
    );
  }

  return (
    <>
      <button
        className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
        onClick={() => {
          track();
          setModalOpen(true);
        }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: showArrow ? '0.5rem' : 0 }}
      >
        {label}
        {showArrow && <ArrowRight size={16} />}
      </button>

      {modalOpen && (
        <EmailCapture
          mode="modal"
          source={source}
          plan={plan}
          lang={lang}
          trigger={<span />}
        />
      )}
    </>
  );
}
