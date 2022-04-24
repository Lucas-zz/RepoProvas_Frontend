import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export default function Menu({ option, handleChange }) {
    let subtitle = "";

    switch (option) {
        case "findByDisciplines":
            subtitle = "Repositório por disciplina";
            break;
        case "findByTeachers":
            subtitle = "Repositório por pessoa instrutora";
            break;
        case "addRepository":
            subtitle = "Adicionar ao repostiório";
            break;
        default:
            break;
    }

    return (
        <>
            <ToggleButtonGroup
                sx={{ mt: 4 }}
                color="primary"
                value={option}
                exclusive
                onChange={handleChange}
                fullWidth
            >
                <ToggleButton value="findByDisciplines">DISCIPLINAS</ToggleButton>
                <ToggleButton value="findByTeachers">PESSOA INSTRUTORA</ToggleButton>
                <ToggleButton value="addRepository">ADICIONAR</ToggleButton>
            </ToggleButtonGroup>
            <Typography sx={{ mt: 4, mb: 4 }}>{subtitle}</Typography>
        </>
    );
}