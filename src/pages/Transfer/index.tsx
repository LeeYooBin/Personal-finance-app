import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CiTextAlignLeft } from "react-icons/ci";
import { RiArrowUpDownLine } from "react-icons/ri";

import BackButton from "../../components/BackButton";

import * as M from "../../style/modal-style";
import * as S from "./style";

import { useAppDispatch } from "../../store";
import { addTransaction } from "../../store/transactions-slice";
import { v4 as uuidv4 } from "uuid";

const Transfer: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [transitionType, setTransitionType] = useState<string>("");
  const [showConfirmMessage, setShowConfirmMessage] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSaveClick = () => {
    if (value && description && transitionType) {
      if (!isNaN(Number(value))) {
        const newTransaction = {
          ID: uuidv4(),
          value: Number(value),
          title: description,
          isDepositStatus: transitionType === "deposit",
          date: new Date(Date.now())
        };

        dispatch(addTransaction(newTransaction));

        setValue("");
        setDescription("");
        setTransitionType("");
        navigate("/");
      } else {
        const valueInput = document.getElementById(
          "value-input"
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

  const handleBack = () => {
    if (value || description || transitionType) {
      setShowConfirmMessage(true);
      return;
    }
    navigate("/");
  };

  return (
    <S.Content>
      <BackButton onClick={handleBack} />
      <S.Form>
        <S.Title>Registrar transferência</S.Title>
        <S.ValueInput
          type="text"
          id="value-input"
          placeholder="100"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          required
        />
        <S.InputWrapper>
          <S.InputSpan>
            <S.InputIcon>
              <CiTextAlignLeft />
            </S.InputIcon>
            <S.Input
              type="text"
              id="description-input"
              placeholder="Netflix, Amazon..."
              value={description}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDescription(e.target.value)
              }
              required
            />
          </S.InputSpan>
          <S.InputSpan>
            <S.InputIcon>
              <RiArrowUpDownLine />
            </S.InputIcon>
            <S.RadioWrapper>
              <S.Input
                type="radio"
                id="radio-1"
                name="transitionType"
                value="deposit"
                checked={transitionType === "deposit"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTransitionType(e.target.value)
                }
                required
              />
              <S.RadioLabel htmlFor="radio-1">Depósito</S.RadioLabel>
            </S.RadioWrapper>
            <S.RadioWrapper>
              <S.Input
                type="radio"
                id="radio-2"
                name="transitionType"
                value="withdraw"
                checked={transitionType === "withdraw"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTransitionType(e.target.value)
                }
                required
              />
              <S.RadioLabel htmlFor="radio-2">Saque</S.RadioLabel>
            </S.RadioWrapper>
          </S.InputSpan>
        </S.InputWrapper>
        <S.SubmitButton type="submit" onClick={handleSaveClick}>
          Save
        </S.SubmitButton>
      </S.Form>
      {showConfirmMessage && (
        <M.Modal>
          <M.MessageWrapper>
            <M.Message>
              Os dados preenchidos serão perdidos! Tem certeza que deseja sair?
            </M.Message>
            <M.Buttons>
              <M.ConfirmButton onClick={() => navigate("/")}>
                Sim
              </M.ConfirmButton>
              <M.ConfirmButton onClick={() => setShowConfirmMessage(false)}>
                Não
              </M.ConfirmButton>
            </M.Buttons>
          </M.MessageWrapper>
        </M.Modal>
      )}
    </S.Content>
  );
};

export default Transfer;
