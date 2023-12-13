//https://www.makeuseof.com/nextjs-google-analytics/

export const pageview = (GA_MEASUREMENT_ID, url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

/*export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
};*/
