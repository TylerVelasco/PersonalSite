import { Bug } from "@phosphor-icons/react";
import SectionHeader from "../../components/SectionHeader";
import SkillBlock from "../../components/SkillBlock";

export default function SkillsSection() {
  return (
    <div className="flex">
      <div className="mx-auto w-full">
        <SectionHeader title="Skills and Tools" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Languages */}
          <div>
            <h5 className="text-4xl font-semibold mb-4 dark:text-white">Languages</h5>
            <div className="grid grid-cols-1 gap-4">
              <SkillBlock background="#1976D2" hoverBackground="#1565C0" textColor="white" title="Typescript / Javascript" years="6 Years" />
              <SkillBlock background="#1976D2" hoverBackground="#1565C0" textColor="white" title="Python" years="2 Years" />
              <SkillBlock background="#1976D2" hoverBackground="#1565C0" textColor="white" title="Java" years="1 Year" />
              <SkillBlock background="#1976D2" hoverBackground="#1565C0" textColor="white" title="YAML" years="5 Years" />
            </div>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h5 className="text-4xl font-semibold mb-4 dark:text-white">Tools</h5>
            <div className="grid grid-cols-1 gap-4">
              <SkillBlock background="#388E3C" hoverBackground="#2E7D32" textColor="white" title="WebdriverIO" years="6 Years" />
              <SkillBlock background="#388E3C" hoverBackground="#2E7D32" textColor="white" title="Playwright" years="2 Years" />
              <SkillBlock background="#388E3C" hoverBackground="#2E7D32" textColor="white" title="Pytest w/ Selenium" years="2 Years" />
              <SkillBlock background="#388E3C" hoverBackground="#2E7D32" textColor="white" title="Postman" years="1 Year" />
              <SkillBlock background="#388E3C" hoverBackground="#2E7D32" textColor="white" title="Appium" years="2 Years" />
              <SkillBlock background="#388E3C" hoverBackground="#2E7D32" textColor="white" title="Github / Github CI/CD" years="6 Years" />
            </div>
          </div>

          {/* Column 3: Concepts */}
          <div>
            <h5 className="text-4xl font-semibold mb-4 dark:text-white">Concepts</h5>
            <div className="grid grid-cols-1 gap-4">
              <SkillBlock background="#f97e25" hoverBackground="#F57F17" textColor="white" title="Manual Testing" years="&quot;Clicking Things&quot;" />
              <SkillBlock background="#f97e25" hoverBackground="#F57F17" textColor="white" title="Automation Testing" years="Letting Robots Click Things" />
              <SkillBlock background="#f97e25" hoverBackground="#F57F17" textColor="white" title="API Testing" years="CRUD Testing" />
              <SkillBlock background="#f97e25" hoverBackground="#F57F17" textColor="white" title="Load Testing" years="Send the swarm" />
              <SkillBlock background="#f97e25" hoverBackground="#F57F17" textColor="white" title="Shift Left Methodology" years="Test early, test often" />
              <SkillBlock background="#f97e25" hoverBackground="#F57F17" textColor="white" title="Quality of Quantity" years={<Bug size={32} className="mb-2" />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
