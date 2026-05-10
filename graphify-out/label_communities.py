import sys, json
from graphify.build import build_from_json
from graphify.cluster import score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from pathlib import Path

extraction = json.loads(Path('graphify-out/.graphify_extract.json').read_text())
detection  = json.loads(Path('graphify-out/.graphify_detect.json').read_text())
analysis   = json.loads(Path('graphify-out/.graphify_analysis.json').read_text())

G = build_from_json(extraction)
communities = {int(k): v for k, v in analysis['communities'].items()}
cohesion = {int(k): v for k, v in analysis['cohesion'].items()}
tokens = {'input': extraction.get('input_tokens', 0), 'output': extraction.get('output_tokens', 0)}

# LABELS
labels = {
    0: "Data Connect SDK & API Operations",
    1: "User Input & Schedule Management",
    2: "Quests & Achievement Services",
    3: "Post Creation & Admin Forms",
    4: "Travel Scheduler Service",
    5: "Authentication & Blog Logic",
    6: "NestJS Admin SDK",
    7: "Sidebar Navigation Component",
    8: "Data Connect Ref Operations",
    9: "Blog & Social Controller",
    10: "Social Post Interactions",
    11: "Dropdown Menu Component",
    12: "Smart Menu & Translation Page",
    13: "Alert Dialog Component",
    14: "Breadcrumb Navigation Component",
    15: "Context Menu Component",
    70: "Project Documentation & Schema"
}

# Fill in missing labels with default
for cid in communities:
    if cid not in labels:
        labels[cid] = f"Community {cid}"

questions = suggest_questions(G, communities, labels)

report = generate(G, communities, cohesion, labels, analysis['gods'], analysis['surprises'], detection, tokens, '.', suggested_questions=questions)
Path('graphify-out/GRAPH_REPORT.md').write_text(report, encoding='utf-8')
Path('graphify-out/.graphify_labels.json').write_text(json.dumps({str(k): v for k, v in labels.items()}))
print('Report updated with community labels')
