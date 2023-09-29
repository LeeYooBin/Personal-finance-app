import React, { useState, ChangeEvent } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import * as M from "../../style/modal-style";
import * as S from "./style";

import { useAppDispatch } from "../../store";
import { removeTransaction, editTransaction } from "../../store/transactions-slice";
import { getDate } from "../../utils/get-date";

interface TransferCardProps {
  ID: string;
  value: number;
  title: string;
  isDepositStatus: boolean;
  date: Date;
}

const TransferCard: React.FC<TransferCardProps> = ({
  ID,
  value,
  title,
  isDepositStatus,
  date
}) => {
  const dispatch = useAppDispatch();
  const [transferValue, setTransferValue] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [transitionType, setTransitionType] = useState<string>("");
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState<boolean>(false);

  const handleDelete = () => {
    dispatch(removeTransaction(ID));
  };

  const handleEdit = () => {
    if (transferValue && description && transitionType) {
      if (!isNaN(Number(transferValue))) {
        const newTransaction = {
          ID,
          value: Number(transferValue),
          title: description,
          isDepositStatus: transitionType === "deposit",
          date: new Date(Date.now())
        };

        dispatch(editTransaction(newTransaction));

        setTransferValue("");
        setDescription("");
        setTransitionType("");
        setIsEditFormOpen(false);
      } else {
        const valueInput = document.getElementById(
          "value-edit-input"
        ) as HTMLInputElement;
        if (valueInput) {
          valueInput.setCustomValidity(
            "Por favor, insira um valor numérico válido."
          );
          valueInput.reportValidity();
        }
      }
    }
  };

  return (
    <S.Content isDepositStatus={isDepositStatus}>
      <S.Title>{title}</S.Title>
      <S.Value isDepositStatus={isDepositStatus}>R$ {value.toFixed(2)}</S.Value>
      <S.Date>{getDate(date)}</S.Date>
      <S.ButtonWrapper>
        <S.EditButton onClick={() => setIsEditFormOpen(true)}>
          <BiSolidEditAlt />
        </S.EditButton>
        <S.DeleteButton onClick={() => setShowDeleteMessage(true)}>
          <AiFillDelete />
        </S.DeleteButton>
      </S.ButtonWrapper>
      {isEditFormOpen && (
        <M.Modal>
          <S.EditForm>
            <S.ExitButton onClick={() => setIsEditFormOpen(false)}>
              <MdClose />
            </S.ExitButton>
            <S.InputWrapper>
              <S.EditInput
                type="text"
                id="value-edit-input"
                placeholder="100"
                value={transferValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTransferValue(e.target.value)
                }
                required
              />
              <S.EditInput
                type="text"
                id="description-edit-input"
                placeholder="Netflix, Amazon..."
                value={description}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.target.value)
                }
                required
              />
              <S.InputSpan>
                <S.RadioWrapper>
                  <S.EditInput
                    type="radio"
                    id="radio-edit-1"
                    name="transitionType"
                    value="deposit"
                    checked={transitionType === "deposit"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setTransitionType(e.target.value)
                    }
                    required
                  />
                  <S.RadioLabel htmlFor="radio-edit-1">Depósito</S.RadioLabel>
                </S.RadioWrapper>
                <S.RadioWrapper>
                  <S.EditInput
                    type="radio"
                    id="radio-edit-2"
                    name="transitionType"
                    value="withdraw"
                    checked={transitionType === "withdraw"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setTransitionType(e.target.value)
                    }
                    required
                  />
                  <S.RadioLabel htmlFor="radio-edit-2">Saque</S.RadioLabel>
                </S.RadioWrapper>
              </S.InputSpan>
            </S.InputWrapper>
            <S.SubmitButton onClick={handleEdit}>Salvar</S.SubmitButton>
          </S.EditForm>
        </M.Modal>
      )}
      {showDeleteMessage && (
        <M.Modal>
          <M.MessageWrapper>
            <M.Message>Tem certeza que deseja apagar a transação?</M.Message>
            <M.Buttons>
              <M.ConfirmButton onClick={handleDelete}>Sim</M.ConfirmButton>
              <M.ConfirmButton onClick={() => setShowDeleteMessage(false)}>
                Não
              </M.ConfirmButton>
            </M.Buttons>
          </M.MessageWrapper>
        </M.Modal>
      )}
    </S.Content>
  );
};

export default TransferCard;
