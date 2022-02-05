function Imagem({className, src, alt}){
    return (
        <figure className={className}>
            <img src={src} alt={alt} />
        </figure>
    )
}
export default Imagem