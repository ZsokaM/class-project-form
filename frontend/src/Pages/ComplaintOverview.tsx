import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { AxiosComplaintApi } from "../utils/AxiosApis";

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
      const result = await AxiosComplaintApi.get("complaints");
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
