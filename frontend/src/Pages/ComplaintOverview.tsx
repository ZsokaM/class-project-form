import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

interface iCard {
  _id: string;
  priority: number;
  title: string;
  created: string;
  description: string;
  reporter: string;
}

const CardOverview = () => {
  const [comps, setComps] = useState([]);

  useEffect(() => {
    async function fetchComplaints() {
      const result = await axios.get("http://localhost:5050/complaints");
      setComps(result.data);
    }
    fetchComplaints();
  }, []);

  return (
    <section>
      {comps.map((complaint: iCard) => {
        return (
          <Card
            key={complaint._id}
            title={complaint.title}
            priority={complaint.priority}
            date={complaint.created}
            description={complaint.description}
            reporter={complaint.reporter}
          />
        );
      })}
    </section>
  );
};

export default CardOverview;
