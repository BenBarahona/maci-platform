import { useFieldArray, useFormContext } from "react-hook-form";
import { HiOutlineTrash } from "react-icons/hi";

import { IconButton } from "~/components/ui/Button";
import { Table, Tbody, Tr, Td } from "~/components/ui/Table";
import { useBallot } from "~/contexts/Ballot";
import { useMaci } from "~/contexts/Maci";

import type { Vote } from "../types";
import type { ReactNode } from "react";

import { ballotCategory } from "../VoteCategories";

import { AllocationInput } from "./AllocationInput";
import { ProjectAvatarWithName } from "./ProjectAvatarWithName";

interface AllocationFormProps {
  disabled?: boolean;
  projectIsLink?: boolean;
  renderHeader?: () => ReactNode;
}

export const AllocationFormWrapper = ({
  disabled = false,
  projectIsLink = false,
  renderHeader = undefined,
}: AllocationFormProps): JSX.Element => {
  const form = useFormContext<{ votes: Vote[] }>();
  const { initialVoiceCredits, pollId } = useMaci();
  const { addToBallot: onSave, removeFromBallot: onRemove } = useBallot();

  const { fields, remove } = useFieldArray({
    name: "votes",
    keyName: "key",
    control: form.control,
  });

  const maxAmountPerCategory = 4;

  const updateTotalVotes = (votes: Vote[], projectId: string, index: number) => {
    const projectVotes = votes.find((vote) => vote.projectId === projectId);

    let totalVote = 0;
    if (projectVotes?.category && projectVotes.category.length >= 5) {
      const [C1 = 0, C2 = 0, C3 = 0, C4 = 0, C5 = 0] = projectVotes.category;

      totalVote = (C1 + 1) * (C2 + 1) * (C3 + 1) * (C4 + 1) + C5;
    }

    form.setValue(`votes.${index}.amount`, totalVote);
  };

  return (
    <Table>
      {renderHeader?.()}

      <Tbody>
        {fields.map((project, i) => (
          <Tr key={project.projectId} className={projectIsLink && "hover:shadow-md"}>
            <Td className="w-full" variant="first">
              <ProjectAvatarWithName showDescription id={project.projectId} isLink={projectIsLink} />
            </Td>

            {ballotCategory.map((category, index) => (
              <Td key={category} className="pr-0">
                <div className="font-bold uppercase">{category}</div>

                <AllocationInput
                  defaultValue={project.amount}
                  disabled={disabled}
                  name={`votes.${i}.category.${index}`}
                  votingMaxProject={maxAmountPerCategory}
                  onBlur={() => {
                    updateTotalVotes(form.getValues().votes, project.projectId, i);
                    onSave(form.getValues().votes, pollId);
                  }}
                />
              </Td>
            ))}

            <Td className="pr-0">
              <div className="font-bold uppercase">TOTAL</div>

              <AllocationInput
                defaultValue={project.amount}
                disabled={disabled}
                editable={false}
                name={`votes.${i}.amount`}
                votingMaxProject={initialVoiceCredits}
                onBlur={() => {
                  onSave(form.getValues().votes, pollId);
                }}
              />
            </Td>

            <Td className="pl-0" variant="last">
              <IconButton
                disabled={disabled}
                icon={HiOutlineTrash}
                tabIndex={-1}
                type="button"
                variant="none"
                onClick={() => {
                  remove(i);
                  onRemove(project.projectId);
                }}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
