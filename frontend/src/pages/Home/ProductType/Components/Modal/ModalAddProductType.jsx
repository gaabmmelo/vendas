import "./index.scss";
import { Grid, InputLabel, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { ButtonStyled } from "components/Button/Button";
import { ModalTitle } from "./TituloModal";

export function ModalAddProductType({ handleClose, open }) {
  const [referenciaAlterar, setReferenciaAlterar] = useState({});

  const handleChangeAlteracao = (atributo, valor) => {
    setReferenciaAlterar({
      ...referenciaAlterar,
      [atributo]: valor,
    });
  };

  const handleAdicionar = async (referencia) => {
    try {
      if (referencia.id) {
        //await atualizarReferencia(referencia);
      } else {
        //await adicionarReferencia(referencia);
      }
      setReferenciaAlterar({});
      handleClose();
    } catch (error) {
      //handleErroSnackbar(error);
    }
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <Grid className="modal" container padding={3}>
        <ModalTitle title="Novo tipo de produto" />

        <Grid item xs={12}>
          <InputLabel
            htmlFor="area"
            sx={{
              color: "#003641",
              fontWeight: "bolder",
              margin: "25px 0px 6px",
            }}
          >
            Nome do tipo
          </InputLabel>

          <TextField
            fullWidth
            id="link"
            inputProps={{ "aria-label": "simple-tabpanel" }}
            onChange={(evt) => handleChangeAlteracao("link", evt.target.value)}
            placeholder="Informe o nome do tipo do produto"
            sx={{
              input: {
                "&::placeholder": {
                  color: "#667085",
                  fontWeight: "500",
                  opacity: 1,
                },
                padding: "10px",
              },
              marginBottom: "1em",
            }}
            value={referenciaAlterar.link || ""}
          />
        </Grid>

        <Grid item textAlign="right" xs={12}>
          <ButtonStyled
            color="secondary"
            size="large"
            onClick={handleClose}
            title={"Cancelar"}
            variant="outlined"
          />

          <ButtonStyled
            color="primary"
            handler={() => handleAdicionar(referenciaAlterar)}
            size="large"
            title={"Adicionar"}
            variant="contained"
          />
        </Grid>
      </Grid>
    </Modal>
  );
}
