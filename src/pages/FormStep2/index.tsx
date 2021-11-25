import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export const FormStep2 = () => {
    const navegate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navegate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navegate('/step3');
        } else {
            alert("Preencha os dados.");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, qual nível melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 1 anos"
                    icon="🤓"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Consigo me virar"
                    description="Já programo mais ou menos 2 anos"
                    icon="🥳"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 2}
                    onClick={() => setLevel(2)}
                />

                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}