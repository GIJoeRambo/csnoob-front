const Decoder = (encryptionId) =>{
    return new Date(parseInt(encryptionId.substring(0, 8), 16) * 1000);
}
export default Decoder;
