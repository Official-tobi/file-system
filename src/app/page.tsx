import { Node } from "~/types/node";
import { FileSystemItem } from "~/components/FileSystemItem";

export default function Home() {
  const nodes: Node[] = [
    {
      name: "This PC",
      nodes: [
        {
          name: "Documents",
          nodes: [
            { name: "Assignments", nodes: [{ name: "first-law-thermo.docx" }] },
            { name: "Projects", nodes: [] },
            { name: "set-up.exe" },
          ],
        },
        {
          name: "Downloads",
          nodes: [
            {
              name: "Research",
              nodes: [
                {
                  name: "Synchronous Motors",
                  nodes: [
                    {
                      name: "Motor Types",
                      nodes: [
                        { name: "motors.docx" },
                        { name: "appendices.pdf" },
                      ],
                    },
                  ],
                },
                {
                  name: "Robotics",
                  nodes: [
                    {
                      name: "Eletrical",
                      nodes: [
                        { name: "wiring.pdf" },
                        { name: "integrated-circuits.pdf" },
                        { name: "microprocessors.pdf" },
                      ],
                    },
                    {
                      name: "Mechanical",
                      nodes: [
                        { name: "actuators.docx" },
                        { name: "instrumentation.docx" },
                        { name: "Materials", nodes: [] },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "Reports",
              nodes: [
                {
                  name: "Annual Report",
                  nodes: [
                    { name: "2022.docx" },
                    { name: "2023.docx" },
                    { name: "2024.docx" },
                  ],
                },
              ],
            },
          ],
        },

        {
          name: "Pictures",
          nodes: [
            {
              name: "Research",
              nodes: [
                {
                  name: "industrial training",
                  nodes: [{ name: "field-trip.jpg" }],
                },
              ],
            },
          ],
        },
        { name: "Videos", nodes: [{ name: "Research", nodes: [] }] },
        { name: "Desktop", nodes: [{ name: "Research", nodes: [] }] },
        { name: "back-up-cache.file" },
      ],
    },
  ];

  return (
    <main className="grid place-items-center h-svh w-full">
      <div className="h-5/6 -translate-x-28">
        <ul className=" translate-x-4">
          {nodes.map((node) => (
            <FileSystemItem node={node} key={node.name} />
          ))}
        </ul>
      </div>
    </main>
  );
}

// Persist state for children components
// Add a drag and drop feature for re-ordering file system
// Add animations on folder toggle
// Highlighting folders on click
// Preventing Layout shifts
// Add branches for adding features
