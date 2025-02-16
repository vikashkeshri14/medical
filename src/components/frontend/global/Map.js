import React from "react";

export default function Map() {
  return (
    <div className="google-map mb-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.0893618280525!2d46.71159077487665!3d24.758125049345722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee4f2fd7fceb3%3A0xcce093d0440b02d7!2z2K_Zitis2YrYqtin2YQg2YfZitmE2KvZg9mK2LEg2LPZiNmE2YrZiNi02YbYsiDYp9mE2LnYsdio2YrYqSBEaWdpdGFsIEhlYWx0aGNhcmUgU29sdXRpb25zIEFSQUJJQQ!5e0!3m2!1sen!2ssa!4v1739728526311!5m2!1sen!2ssa"
        width="100%"
        height="100%"
        frameBorder={0}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
  );
}
