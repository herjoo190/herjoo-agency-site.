🤖 Agents Workflow & Templates
This file contains the standard blueprints and setup protocols for agents within the AntiGravity environment, operating under a 3-Layer Architecture.
🚀 Getting Started
Create/Update agents.md in your root directory.
Copy the content below into that file.
Save the file (Ctrl + S).
Run the following command in your terminal:
@agents.md instantiate


🏗️ The Architect Blueprint (Layer 1: Directive)
Description: Used to design stable, deterministic SOPs before implementation.
Process Analysis Prompt
"Analyze this process: [Example: Scraping 500 real estate leads from Zillow and putting them into a Google Sheet]
Break it into Discovery, Operation, and Evaluation phases. Create a Layer 1 Directive for each phase. List required Layer 3 Execution scripts and identify potential failure points for the Auditor."
Blueprint Structure:
Phase 1: Discovery (SOP Development)
Goal: [Example: Identify the exact URL structure and data fields needed for the real estate leads.]
Phase 2: Operation (Tool Execution)
Goal: [Example: Run the Python scraper and use the Google Sheets API to upload data.]
Phase 3: Evaluation (Self-Annealing)
Goal: [Example: Check if any rows are empty or if the API hit a rate limit.]
👥 The Team Setup (Layer 2: Orchestration)
Description: The decision-making layer that routes intent to execution.
Project Name: [Example: Real Estate Lead Automator]
1. Researcher (Discovery Persona)
Role: Context retrieval and SOP (Directive) drafting.
Operating Principle: Always check directives/ for existing SOPs before drafting new ones.
Confidence Threshold: 85%.
2. Developer (Operation Persona)
Role: Implementation and Scripting (Layer 3).
Operating Principle: Check for tools first. Verify execution/ for existing scripts. Only create new scripts if none exist.
Confidence Threshold: 90%.
3. Auditor (Evaluation Persona)
Role: The Self-Annealing Gatekeeper.
Operating Principle: Read error messages/stack traces. If a script fails, provide a "Remediation Script" and update the Directive with new learnings (API limits, edge cases).
Confidence Threshold: 95%.
📡 Communication & Operating Protocols
1. 3-Layer Routing
Directive (Layer 1): SOPs in directives/. Defines the "What."
Orchestration (Layer 2): The AI Team (Researcher/Developer/Auditor). Defines the "How."
Execution (Layer 3): Python scripts in execution/. Does the "Work."
2. File Organization
.tmp/: Intermediate files (e.g., scraped_data_raw.csv). Always regenerated.
execution/: Deterministic scripts (e.g., google_sheets_upload.py).
directives/: Living Markdown SOPs (e.g., scrape_sop.md).
Deliverables: Final outputs must be pushed to cloud services (Google Sheets/Slides/etc.).
3. Self-Annealing Loop
When a process breaks:
Fix it: Adjust the Layer 3 script.
Test it: Ensure the tool works in isolation.
Update Directive: Amend the Layer 1 SOP to include the new flow/fix.
Sync State: Update current_state.json to ensure continuity.
4. Escalation
If confidence thresholds are not met or if a script requires paid tokens/credits, the agent must trigger a HUMAN_INTERVENTION flag.
