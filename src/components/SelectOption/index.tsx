import * as S from './styles';

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({ title, description, icon, selected, onClick }: Props) => {
    return (
        <S.Container onClick={onClick} selected={selected}>
            <S.Icon>{icon}</S.Icon>
            <S.Info>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.Info>
        </S.Container>
    );
}