import { Container } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Menu from "../../components/MainPageMenu";

export default function Main() {
    const [data, setData] = useState({
        disciplines: [],
        teachers: []
    });

    const { user } = useAuth();

    const [option, setOption] = useState("findByDiscipline");

    function handleChange(event) {
        const value = event.target.value;
        setOption(value);
    }

    return (
        <Container component="main" maxWidth="xl">
            <Menu option={option} handleChange={handleChange} />
            <Container maxWidth="xl" sx={{
                marginTop: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {option === "findByDisciplines"
                    ? <>DisciplineList</>
                    : option === "findByTeachers"
                        ? <>TeacherList</>
                        : option === "addRepository"
                            ? <>AddRepository</>
                            : <></>
                }
            </Container>
        </Container>
    );
}