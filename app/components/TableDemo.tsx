"use client";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Badge } from "@/components/ui/badge"
import { X } from 'lucide-react';

interface RowData {
  creative_id: number;
  creative_name: string;
  tags: string | null; // Allow null values
  country: string;
  ad_network: string;
  os: string;
  campaign: string;
  ad_group: string;
  ipm: number;
  ctr: number;
  spend: number;
  impressions: number;
  clicks: number;
  cpm: number;
  cost_per_click: number;
  cost_per_install: number;
  installs: number;
}

const data = [
  {
    creative_id: 120214081337200422,
    creative_name: "New Creative 4",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:download it and start crushing those levels!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:rocks;End card elements - Objects:boots;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:Orange;End card elements - Background setting:fantasy;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 2.7001132306,
    ctr: 0.844874,
    spend: 7.01,
    impressions: 11481,
    clicks: 97,
    cpm: 0.610574,
    cost_per_click: 0.072268,
    cost_per_install: 0.2261290323,
    installs: 31,
  },
  {
    creative_id: 120214081106690422,
    creative_name: "New Creative 5",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:Download today and start merging!;End card elements - Objects:large brown mushrooms;End card elements - Objects:trees;End card elements - Objects:a wand;End card elements - Language:English;End card elements - Logo present:yes;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:Orange;End card elements - Background setting:forest;End card elements - CTA background colour:Dark Purple;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 1.8835616438,
    ctr: 0.770548,
    spend: 2.95,
    impressions: 5840,
    clicks: 45,
    cpm: 0.505137,
    cost_per_click: 0.065556,
    cost_per_install: 0.2681818182,
    installs: 11,
  },
  {
    creative_id: 120214096349490422,
    creative_name: "Creative 2",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:Download and play for free!;End card elements - Objects:purple and red mushrooms;End card elements - Objects:crystals;End card elements - Objects:magnet;End card elements - Objects:bomb;End card elements - Language:English;End card elements - Logo present:yes;End card elements - CTA Placement:Middle-Center;End card elements - Background Colour:light blue;End card elements - Background setting:bedroom;End card elements - CTA background colour:light-blue;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives \u2013 Revised",
    ipm: 1.6037503084,
    ctr: 0.826548,
    spend: 5.05,
    impressions: 8106,
    clicks: 67,
    cpm: 0.622995,
    cost_per_click: 0.075373,
    cost_per_install: 0.3884615385,
    installs: 13,
  },
  {
    creative_id: 120214081106700422,
    creative_name: "New Creative 1",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:Download now!;End card elements - Objects:colored bubbles;End card elements - Objects:wand;End card elements - Objects:game screen;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:Yellowish Orange;End card elements - Background setting:forest;End card elements - CTA background colour:Purple;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 0.6657789614,
    ctr: 0.732357,
    spend: 0.75,
    impressions: 1502,
    clicks: 11,
    cpm: 0.499334,
    cost_per_click: 0.068182,
    cost_per_install: 0.75,
    installs: 1,
  },
  {
    creative_id: 120214096349510422,
    creative_name: "Creative 3",
    tags: "Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA:Download Bubblewise now;End card elements - Objects:blue crystals;End card elements - Objects:pink petals;End card elements - Objects:red mushrooms;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:light blue;End card elements - Background setting:game;End card elements - CTA background colour:White;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives \u2013 Revised",
    ipm: 0.6373486297,
    ctr: 0.478011,
    spend: 2.85,
    impressions: 6276,
    clicks: 30,
    cpm: 0.454111,
    cost_per_click: 0.095,
    cost_per_install: 0.7125,
    installs: 4,
  },
  {
    creative_id: 120214096349530422,
    creative_name: "Creative 4",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:Download Bubblewise today;End card elements - Objects:bat shaped bubble;End card elements - Objects:mushroom shaped bubble;End card elements - Objects:potion bottle;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:pale green;End card elements - Background setting:game screen;End card elements - CTA background colour:White;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives \u2013 Revised",
    ipm: 0.4719207173,
    ctr: 0.589901,
    spend: 1.77,
    impressions: 4238,
    clicks: 25,
    cpm: 0.41765,
    cost_per_click: 0.0708,
    cost_per_install: 0.885,
    installs: 2,
  },
  {
    creative_id: 120216118074910422,
    creative_name: "New App promotion ad",
    tags: null,
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "Test for Daga: boosting",
    ad_group: "Partnership",
    ipm: 0.4719207173,
    ctr: 0.589901,
    spend: 1.77,
    impressions: 4238,
    clicks: 25,
    cpm: 0.41765,
    cost_per_click: 0.0708,
    cost_per_install: 0.885,
    installs: 2,
  },
  {
    creative_id: 120214081106680422,
    creative_name: "New Creative 3",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:Play now and prove your strategy skills!;End card elements - Objects:wooden crib;End card elements - Objects:door handle;End card elements - Language:English;End card elements - CTA Placement:Middle-Right;End card elements - Background Colour:White;End card elements - Background setting:forest;End card elements - CTA background colour:White;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
  {
    creative_id: 120214080965820422,
    creative_name: "Creative 2",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:Download and play for free!;End card elements - Objects:purple and red mushrooms;End card elements - Objects:crystals;End card elements - Objects:magnet;End card elements - Objects:bomb;End card elements - Language:English;End card elements - Logo present:yes;End card elements - CTA Placement:Middle-Center;End card elements - Background Colour:light blue;End card elements - Background setting:bedroom;End card elements - CTA background colour:light-blue;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
  {
    creative_id: 120214078111440422,
    creative_name: "Creative 1",
    tags: "Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA:TRY AGAIN;End card elements - Objects:skull bubble;End card elements - Objects:bone bubble;End card elements - Objects:mushroom bubble;End card elements - Objects:gem bubble;End card elements - Objects:bomb bubble;End card elements - Objects:cage with bat wings;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:Periwinkle;End card elements - Background setting:purple;End card elements - CTA background colour:Orange;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
  {
    creative_id: 120214080965830422,
    creative_name: "Creative 3",
    tags: "Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA:Download Bubblewise now;End card elements - Objects:blue crystals;End card elements - Objects:pink petals;End card elements - Objects:red mushrooms;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:light blue;End card elements - Background setting:game;End card elements - CTA background colour:White;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
  {
    creative_id: 120214080965840422,
    creative_name: "Creative 4",
    tags: "Concept:UGC;Audio - Type:voiceover;Audio - Language:English;End card elements - CTA:Download Bubblewise today;End card elements - Objects:bat shaped bubble;End card elements - Objects:mushroom shaped bubble;End card elements - Objects:potion bottle;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:pale green;End card elements - Background setting:game screen;End card elements - CTA background colour:White;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
  {
    creative_id: 120214096349500422,
    creative_name: "Creative 1",
    tags: "Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA:TRY AGAIN;End card elements - Objects:skull bubble;End card elements - Objects:bone bubble;End card elements - Objects:mushroom bubble;End card elements - Objects:gem bubble;End card elements - Objects:bomb bubble;End card elements - Objects:cage with bat wings;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:Periwinkle;End card elements - Background setting:purple;End card elements - CTA background colour:Orange;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - OG Creatives",
    ad_group: "OG Creatives \u2013 Revised",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
  {
    creative_id: 120214081106650422,
    creative_name: "New Creative 2",
    tags: "Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA:Play now and prove your;End card elements - Objects:bubble with a face, multiple;End card elements - Objects:wand;End card elements - Objects:trees;End card elements - Objects:ground;End card elements - Language:English;End card elements - CTA Placement:Middle-Center;End card elements - Background Colour:Golden Yellow;End card elements - Background setting:forest;End card elements - CTA background colour:purple;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "App promotion campaign - New Creatives",
    ad_group: "New Creatives",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
  {
    creative_id: 120213756200020422,
    creative_name: "Test Creatives",
    tags: "End card elements - CTA:Download Bubblewise now;End card elements - Objects:blue crystals;End card elements - Objects:pink petals;End card elements - Objects:red mushrooms;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:light blue;End card elements - Background setting:game;End card elements - CTA background colour:White;Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA background colour:Orange;End card elements - Background setting:purple;End card elements - Background Colour:Periwinkle;End card elements - Objects:cage;End card elements - Objects:bomb;End card elements - Objects:mushrooms;End card elements - CTA:TRY AGAIN;End card elements - Objects:skull;End card elements - Objects:bones;End card elements - Objects:gems;Audio - Type:voiceover;End card elements - CTA:Download Bubblewise today;End card elements - Objects:bat shaped bubble;End card elements - Objects:mushroom shaped bubble;End card elements - Objects:potion bottle;End card elements - Background Colour:pale green;End card elements - Background setting:game screen;End card elements - CTA background colour:pale green;End card elements - Background Colour:Green;End card elements - CTA Placement:Middle-Center;Audio - Language:Unspecified;Audio - Type:Sound Effects;Concept:Gameplay;End card elements - CTA:Download and play for free!;End card elements - Objects:purple and red mushrooms;End card elements - Objects:crystals;End card elements - Objects:magnet;End card elements - Logo present:yes;End card elements - Background setting:bedroom;End card elements - CTA background colour:light-blue;",
    country: "ID",
    ad_network: "meta",
    os: "unknown",
    campaign: "Bubblewise CPI Test Campaign",
    ad_group: "Bubblewise CPI Test Ad Set",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
  {
    creative_id: 120213756200020422,
    creative_name: "Test Creatives",
    tags: "End card elements - CTA:Download Bubblewise now;End card elements - Objects:blue crystals;End card elements - Objects:pink petals;End card elements - Objects:red mushrooms;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:light blue;End card elements - Background setting:game;End card elements - CTA background colour:White;Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA background colour:Orange;End card elements - Background setting:purple;End card elements - Background Colour:Periwinkle;End card elements - Objects:cage;End card elements - Objects:bomb;End card elements - Objects:mushrooms;End card elements - CTA:TRY AGAIN;End card elements - Objects:skull;End card elements - Objects:bones;End card elements - Objects:gems;Audio - Type:voiceover;End card elements - CTA:Download Bubblewise today;End card elements - Objects:bat shaped bubble;End card elements - Objects:mushroom shaped bubble;End card elements - Objects:potion bottle;End card elements - Background Colour:pale green;End card elements - Background setting:game screen;End card elements - CTA background colour:pale green;End card elements - Background Colour:Green;End card elements - CTA Placement:Middle-Center;Audio - Language:Unspecified;Audio - Type:Sound Effects;Concept:Gameplay;End card elements - CTA:Download and play for free!;End card elements - Objects:purple and red mushrooms;End card elements - Objects:crystals;End card elements - Objects:magnet;End card elements - Logo present:yes;End card elements - Background setting:bedroom;End card elements - CTA background colour:light-blue;",
    country: "IN",
    ad_network: "meta",
    os: "unknown",
    campaign: "Bubblewise CPI Test Campaign",
    ad_group: "Bubblewise CPI Test Ad Set",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
  {
    creative_id: 120213756200020422,
    creative_name: "Test Creatives",
    tags: "End card elements - CTA:Download Bubblewise now;End card elements - Objects:blue crystals;End card elements - Objects:pink petals;End card elements - Objects:red mushrooms;End card elements - Language:English;End card elements - CTA Placement:Bottom-Center;End card elements - Background Colour:light blue;End card elements - Background setting:game;End card elements - CTA background colour:White;Concept:UGC;Audio - Type:Voiceover;Audio - Language:English;End card elements - CTA background colour:Orange;End card elements - Background setting:purple;End card elements - Background Colour:Periwinkle;End card elements - Objects:cage;End card elements - Objects:bomb;End card elements - Objects:mushrooms;End card elements - CTA:TRY AGAIN;End card elements - Objects:skull;End card elements - Objects:bones;End card elements - Objects:gems;Audio - Type:voiceover;End card elements - CTA:Download Bubblewise today;End card elements - Objects:bat shaped bubble;End card elements - Objects:mushroom shaped bubble;End card elements - Objects:potion bottle;End card elements - Background Colour:pale green;End card elements - Background setting:game screen;End card elements - CTA background colour:pale green;End card elements - Background Colour:Green;End card elements - CTA Placement:Middle-Center;Audio - Language:Unspecified;Audio - Type:Sound Effects;Concept:Gameplay;End card elements - CTA:Download and play for free!;End card elements - Objects:purple and red mushrooms;End card elements - Objects:crystals;End card elements - Objects:magnet;End card elements - Logo present:yes;End card elements - Background setting:bedroom;End card elements - CTA background colour:light-blue;",
    country: "BR",
    ad_network: "meta",
    os: "unknown",
    campaign: "Bubblewise CPI Test Campaign",
    ad_group: "Bubblewise CPI Test Ad Set",
    ipm: 0.0,
    ctr: 0.0,
    spend: 0.0,
    impressions: 0,
    clicks: 0,
    cpm: 0.0,
    cost_per_click: 0.0,
    cost_per_install: 0.0,
    installs: 0,
  },
];

// export function TableDemo() {
//   const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortColumn, setSortColumn] = useState<keyof RowData | null>(null);
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
//   const [modal, setModal] = useState(false);

//   const filteredData = data.filter((item) =>
//     Object.values(item).some((value) =>
//       value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   const sortedData = [...filteredData].sort((a, b) => {
//     if (!sortColumn) return 0;
//     const valA = a[sortColumn];
//     const valB = b[sortColumn];
//     if (typeof valA === "string" && typeof valB === "string") {
//       return sortOrder === "asc"
//         ? valA.localeCompare(valB)
//         : valB.localeCompare(valA);
//     }
//     if (typeof valA === "number" && typeof valB === "number") {
//       return sortOrder === "asc" ? valA - valB : valB - valA;
//     }
//     return 0;
//   });

//   return (
//     <div>
//       {/* Search Input */}
//       <Input
//         placeholder="Search..."
//         className="mb-2 w-full"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Table */}
//       <Table>
//         <TableHeader>
//           <TableRow>
//             {Object.keys(data[0]).map((key) => (
//               <TableHead
//                 key={key}
//                 className="cursor-pointer"
//                 onClick={() => {
//                   setSortColumn(key);
//                   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//                 }}
//               >
//                 {key.replace(/_/g, " ").toUpperCase()} {sortColumn === key ? (sortOrder === "asc" ? "▲" : "▼") : ""}
//               </TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {sortedData.map((item, index) => (
//             <TableRow
//               key={index}
//               className="cursor-pointer"
//               onClick={() => {
//                 setSelectedRow(item);
//                 setModal(true);
//               }}
//             >
//               {Object.values(item).map((value, idx) => (
//                 <TableCell key={idx}>
//                   {typeof value === "string" || typeof value === "number"
//                     ? value.toString().length > 10
//                       ? `${value.toString().substring(0, 10)}...`
//                       : value
//                     : JSON.stringify(value).length > 10
//                     ? `${JSON.stringify(value).substring(0, 10)}...`
//                     : JSON.stringify(value)}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       {/* Row Preview Card */}
//       {selectedRow && (
//         <Card
//           className="fixed bottom-4 right-4 shadow-lg p-4 w-[600px] max-h-[800px] overflow-auto cursor-pointer"
//           onClick={() => setModal(true)}
//         >
//           <Button
//             className="absolute top-2 right-2"
//             size="sm"
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent opening modal while closing
//               setSelectedRow(null);
//             }}
//           >
//             ✕
//           </Button>
//           <h3 className="font-semibold text-sm">Row Preview</h3>
//           <pre className="text-xs whitespace-pre-wrap break-words">{JSON.stringify(selectedRow, null, 2)}</pre>
//         </Card>
//       )}

//       {/* Modal Dialog */}
//       <Dialog open={modal} onOpenChange={setModal}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Full Row Data</DialogTitle>
//           </DialogHeader>
//           <pre className="text-sm whitespace-pre-wrap break-words">{JSON.stringify(selectedRow, null, 2)}</pre>
//           <Button
//             className="absolute top-2 right-2"
//             size="sm"
//             onClick={() => {
//               setModal(false);
//               setSelectedRow(null);
//             }}
//           >
//             ✕
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


// HERER


// export function TableDemo() {
//     const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [sortColumn, setSortColumn] = useState<keyof RowData | null>(null);
//     const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
//     const [thisModal, setThisModal] = useState(false);
  
//     const filteredData = data.filter((item) =>
//       Object.values(item).some((value) =>
//         value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
  
//     const sortedData = [...filteredData].sort((a, b) => {
//       if (!sortColumn) return 0;
//       const valA = a[sortColumn];
//       const valB = b[sortColumn];
//       if (typeof valA === "string" && typeof valB === "string") {
//         return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
//       }
//       if (typeof valA === "number" && typeof valB === "number") {
//         return sortOrder === "asc" ? valA - valB : valB - valA;
//       }
//       return 0;
//     });
  
//     return (
//       <div>
//         {/* Search Input */}
//         <Input
//           placeholder="Search..."
//           className="mb-2 w-full"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
  
//         {/* Table */}
//         <Table className="border-collapse border border-gray-200 w-full text-[10px]">
//           <TableHeader className="bg-gray-100">
//             <TableRow className="border-b border-gray-200">
//               {Object.keys(data[0]).map((key) => (
//                 <TableHead
//                   key={key}
//                   className="cursor-pointer px-1 py-0.5 border-r border-gray-200"
//                   onClick={() => {
//                     setSortColumn(key as keyof RowData); // ✅ FIX: Explicit type assertion
//                     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//                   }}
//                 >
//                   {key.replace(/_/g, " ").toUpperCase()} {sortColumn === key ? (sortOrder === "asc" ? "▲" : "▼") : ""}
//                 </TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {sortedData.map((item, index) => (
//               <TableRow
//                 key={index}
//                 className="cursor-pointer border-b border-gray-200 hover:bg-gray-50"
//                 onClick={() => {
//                   setSelectedRow(item);
//                 }}
//               >
//                 {Object.values(item).map((value, idx) => (
//                   <TableCell key={idx} className="px-1 py-0.5 border-r border-gray-200">
//                     {typeof value === "string" || typeof value === "number"
//                       ? value.toString().length > 10
//                         ? `${value.toString().substring(0, 10)}...`
//                         : value
//                       : JSON.stringify(value).length > 10
//                       ? `${JSON.stringify(value).substring(0, 10)}...`
//                       : JSON.stringify(value)}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
  
//         {/* Row Preview Card */}
//         {selectedRow && (
//           <Card
//             className="fixed bottom-4 right-4 shadow-lg p-4 w-[600px] max-h-[800px] overflow-auto cursor-pointer"
//             onClick={() => setThisModal(true)}
//           >
//             <Button
//               className="absolute top-2 right-2"
//               size="sm"
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent opening modal while closing
//                 setSelectedRow(null);
//               }}
//             >
//               ✕
//             </Button>
//             <h3 className="font-semibold text-sm">Row Preview</h3>
//             <pre className="text-xs whitespace-pre-wrap break-words">{JSON.stringify(selectedRow, null, 2)}</pre>
//           </Card>
//         )}
  
//         {/* Modal Dialog */}
//         <Dialog open={thisModal} onOpenChange={setThisModal}>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Full Row Data</DialogTitle>
//               </DialogHeader>
//               <pre className="text-sm whitespace-pre-wrap break-words">{JSON.stringify(selectedRow, null, 2)}</pre>
//               <Button
//                 className="absolute top-2 right-2"
//                 size="sm"
//                 onClick={() => {
//                   setThisModal(false);
//                 //   setSelectedRow(null);
//                 }}
//               >
//                 ✕
//               </Button>
//             </DialogContent>
//           </Dialog>
//       </div>
//     );
//   }
const RowPreviewContent = ({ selectedRow }: { selectedRow: RowData }) => {
    // Format tags into array
    const tags = selectedRow.tags ? selectedRow.tags.split(';').filter(tag => tag) : [];
    
    // Group metrics
    const metrics = {
      'Performance Metrics': [
        { key: 'ipm', label: 'IPM', value: selectedRow.ipm },
        { key: 'ctr', label: 'CTR', value: selectedRow.ctr },
        { key: 'cpm', label: 'CPM', value: `$${selectedRow.cpm}` },
      ],
      'Cost Metrics': [
        { key: 'spend', label: 'Spend', value: `$${selectedRow.spend}` },
        { key: 'cost_per_click', label: 'Cost per Click', value: `$${selectedRow.cost_per_click}` },
        { key: 'cost_per_install', label: 'Cost per Install', value: `$${selectedRow.cost_per_install}` },
      ],
      'Engagement Metrics': [
        { key: 'impressions', label: 'Impressions', value: selectedRow.impressions.toLocaleString() },
        { key: 'clicks', label: 'Clicks', value: selectedRow.clicks.toLocaleString() },
        { key: 'installs', label: 'Installs', value: selectedRow.installs.toLocaleString() },
      ]
    };
  
    // General info
    const generalInfo = [
      { key: 'creative_id', label: 'Creative ID', value: selectedRow.creative_id },
      { key: 'creative_name', label: 'Creative Name', value: selectedRow.creative_name },
      { key: 'country', label: 'Country', value: selectedRow.country },
      { key: 'ad_network', label: 'Ad Network', value: selectedRow.ad_network },
      { key: 'os', label: 'OS', value: selectedRow.os },
      { key: 'campaign', label: 'Campaign', value: selectedRow.campaign },
      { key: 'ad_group', label: 'Ad Group', value: selectedRow.ad_group },
    ];
  
    return (
      <div className="space-y-6">
        {/* General Information */}
        <div>
          <h3 className="font-medium text-sm mb-2 text-gray-500">General Information</h3>
          <div className="grid grid-cols-2 gap-2">
            {generalInfo.map(({ key, label, value }) => (
              <div key={key} className="space-y-1">
                <p className="text-xs text-gray-500">{label}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tags */}
        <div>
          <h3 className="font-medium text-sm mb-2 text-gray-500">Tags</h3>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag.trim()}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Metrics */}
        {Object.entries(metrics).map(([section, items]) => (
          <div key={section}>
            <h3 className="font-medium text-sm mb-2 text-gray-500">{section}</h3>
            <div className="grid grid-cols-3 gap-2">
              {items.map(({ key, label, value }) => (
                <div key={key} className="space-y-1">
                  <p className="text-xs text-gray-500">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Main TableDemo component
  export function TableDemo() {
    const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState<keyof RowData | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [thisModal, setThisModal] = useState(false);
  
    const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  
    const sortedData = [...filteredData].sort((a, b) => {
      if (!sortColumn) return 0;
      const valA = a[sortColumn];
      const valB = b[sortColumn];
      if (typeof valA === "string" && typeof valB === "string") {
        return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }
      return 0;
    });
  
    return (
      <div>
        {/* Search Input */}
        <Input
          placeholder="Search..."
          className="mb-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  
        {/* Table */}
        <Table className="border-collapse border border-gray-200 w-full text-[10px]">
          <TableHeader className="bg-gray-100">
            <TableRow className="border-b border-gray-200">
              {Object.keys(data[0]).map((key) => (
                <TableHead
                  key={key}
                  className="cursor-pointer px-1 py-0.5 border-r border-gray-200"
                  onClick={() => {
                    setSortColumn(key as keyof RowData);
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  {key.replace(/_/g, " ").toUpperCase()} {sortColumn === key ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item, index) => (
              <TableRow
                key={index}
                className="cursor-pointer border-b border-gray-200 hover:bg-gray-50"
                onClick={() => {
                  setSelectedRow(item);
                }}
              >
                {Object.values(item).map((value, idx) => (
                  <TableCell key={idx} className="px-1 py-0.5 border-r border-gray-200">
                    {typeof value === "string" || typeof value === "number"
                      ? value.toString().length > 10
                        ? `${value.toString().substring(0, 10)}...`
                        : value
                      : JSON.stringify(value).length > 10
                      ? `${JSON.stringify(value).substring(0, 10)}...`
                      : JSON.stringify(value)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
        {/* Improved Row Preview Card */}
        {selectedRow && (
          <Card
            className="fixed bottom-4 right-4 shadow-lg w-[500px] max-h-[500px] overflow-auto cursor-pointer z-50"
            onClick={() => setThisModal(true)}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Creative Details</CardTitle>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRow(null);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <RowPreviewContent selectedRow={selectedRow} />
            </CardContent>
          </Card>
        )}
  
        {/* Modal Dialog */}
        <Dialog open={thisModal} onOpenChange={setThisModal}>
          <DialogContent className="max-w-6xl max-h-[70vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>Full Row Data</DialogTitle>
            </DialogHeader>
            
            {selectedRow && <RowPreviewContent selectedRow={selectedRow} />}
            
            <Button
              className="absolute top-2 right-2"
              size="sm"
              variant="ghost"
              onClick={() => setThisModal(false)}
            >
              
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }