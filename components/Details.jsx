"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const DetailsItem = ({ summary, description, open=false}) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div 
        style={{ marginBottom: "1rem", borderBottom: "1px solid #ffffff", paddingBottom: "1rem", maxWidth: "auto"}}
        onClick={() => setIsOpen(!isOpen)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          userSelect: "none",
          fontStyle: ""
        }}
      >
        <span style={{ fontSize: "1.75rem", fontWeight: 200 }}  dangerouslySetInnerHTML={{ __html: summary }}  ></span>
        <span style={{ marginLeft: "1rem" }}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </span>
      </div>
      {isOpen && (
        <div
        style={{ marginTop: "14px", fontWeight: 200, fontSize: "1.25rem" }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      )}
    </div>
  );
};

const Details = ({ details }) => {
  return (
    <div className="w-full mt-10">
      {details.map((detail, index) => (
        <DetailsItem
          key={index}
          open={index === 0}
          summary={detail.summary}
          description={detail.description}
        />
      ))}
    </div>
  );
};

export default Details;
