interface TextoColoridoMaiusculoProps {
    texto: string;
    cor: string;
}

const TextoColoridoMaiusculo: React.FC<TextoColoridoMaiusculoProps> = (props) => {
    return (
        <p style={{ color: props.cor, textTransform: 'uppercase' }}>
            {props.texto}
        </p>
    );
};

export default TextoColoridoMaiusculo;