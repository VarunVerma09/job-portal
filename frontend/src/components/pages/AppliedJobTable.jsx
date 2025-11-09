import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const AppliedJobTable = () => {
  const jobs = [
    {
      date: "2025-11-01",
      role: "Frontend Developer",
      company: "Google",
      status: "Under Review",
    },
    {
      date: "2025-11-05",
      role: "React Developer",
      company: "Microsoft",
      status: "Shortlisted",
    },
  ];

  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="font-medium">{job.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
