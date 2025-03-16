import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const faqs = [
  {
    id: 1,
    question: "What is the aircraft weight and balance system?",
    answer: "Aircraft weight and balance system ensures stability...",
  },
  {
    id: 2,
    question: "Why is the weight and balance system important?",
    answer: "It affects flight performance and safety...",
  },
  {
    id: 3,
    question: "What are the main load control arrangements?",
    answer: "Load control arrangements include fuel, cargo, and seating...",
  },
  {
    id: 4,
    question: "What are the benefits of weight and balance system?",
    answer: "Benefits include improved flight efficiency...",
  },
];

const FAQs = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">FAQ</h2>
      <Accordion>
        {faqs.map((faq) => (
          <Card key={faq.id} className="mb-2">
            <Card.Header className="d-flex align-items-center">
              <div className="me-3 text-muted" style={{ fontSize: "24px" }}>
                Q{faq.id}
              </div>
              <Button
                variant="link"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="text-dark text-start"
              >
                {faq.question}
              </Button>
            </Card.Header>
            {openId === faq.id && <Card.Body>{faq.answer}</Card.Body>}
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
