import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a
          href="https://mvrservices.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright
        </a>
        <span className="ms-1">&copy; 2025 mvrservices</span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
