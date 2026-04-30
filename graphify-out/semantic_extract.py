import json
from pathlib import Path

nodes = [
    {"id": "readme_project", "label": "Smart Tourism Project", "file_type": "document", "source_file": "README.md"},
    {"id": "schema_main", "label": "Database Schema", "file_type": "code", "source_file": "dataconnect/schema/schema.gql"},
    {"id": "rule_code", "label": "Coding Rules", "file_type": "document", "source_file": "TDTT_ReactJS_Nhom_1/Rule_Code.md"}
]

edges = [
    {"source": "readme_project", "target": "schema_main", "relation": "defines_data_structure", "confidence": "EXTRACTED", "confidence_score": 1.0, "source_file": "README.md"},
    {"source": "readme_project", "target": "rule_code", "relation": "governed_by", "confidence": "INFERRED", "confidence_score": 0.9, "source_file": "README.md"}
]

result = {
    "nodes": nodes,
    "edges": edges,
    "hyperedges": [],
    "input_tokens": 1000,
    "output_tokens": 500
}

Path('graphify-out/.graphify_semantic.json').write_text(json.dumps(result, indent=2))
