---
tracker: clickup
clickup-account: zelogic
clickup-lists: 901223321733
---

# Issue tracker: ClickUp

Issues for this repo live in ClickUp, account `zelogic`, space **Dev Tools**
(901210937944). Not in GitHub Issues, not in beads, not as markdown files. Every
skill that reads or writes "the issue tracker" uses the `clickup zelogic ...`
wrapper (the `ops:clickup` skill).

Do not create `.scratch/` issue files or a combined tickets markdown file.

| List | ID           | Use                                   |
| ---- | ------------ | ------------------------------------- |
| Site | 901223321733 | All site work: features, bugs, chores |

Statuses: `to do`, `in progress`, `complete`. Priority: 1=urgent, 2=high,
3=normal, 4=low.

## When a skill says "publish to the issue tracker"

    clickup zelogic task create --list 901223321733 --name "<summary>" \
      --description @/path/to/body.txt --priority 3 --assignee 308596868

- Descriptions are plain text (no markdown). Put acceptance criteria and design
  notes in the body under plain headings.
- Hierarchy: an epic is a parent task; tickets are subtasks via
  `--parent <task-id>`. A subtask must be created in its parent's list.
- Ordering constraints:
  `clickup zelogic task add-dep <task> --depends-on <blocker>`.
- Triage labels are tags: `--tag <name>` at create, or
  `clickup zelogic task add-tag <task> <name>`. See `triage-labels.md`.
- Creates are live writes in a shared workspace: confirm with the user first.

## When a skill says "fetch the relevant ticket"

    clickup-prime
    clickup zelogic task get <task-id> --markdown --output json
    clickup zelogic comment list --task <task-id> --output json

## Updating and closing

- Start work: `clickup zelogic task update <task-id> --status "in progress"`
- Note progress or a decision:
  `clickup zelogic comment create --task <task-id> --text "..." --markdown`
- Close: `clickup zelogic task update <task-id> --status complete`
