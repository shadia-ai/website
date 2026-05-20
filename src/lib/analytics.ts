import mixpanel from 'mixpanel-browser';

const TOKEN = 'f1c1f4a3656776629a149c50d90ab7c0';

let ready = false;

export function init() {
  if (!TOKEN || ready) return;
  mixpanel.init(TOKEN, {
    debug: false,
    track_pageview: false,
    persistence: 'localStorage',
  });
  ready = true;
}

export function track(event: string, props?: Record<string, unknown>) {
  if (!TOKEN) return;
  init();
  mixpanel.track(event, props);
}

export function identify(email: string) {
  if (!TOKEN) return;
  init();
  mixpanel.identify(email);
  mixpanel.people.set({ $email: email });
}
