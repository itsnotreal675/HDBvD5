const help = (prefix) => {
	return `> *HDB BOTv5.1 Segue os comandos bb* <
comando : *${prefix}sticker* ou *${prefix}stiker*
descrição : converter imagem / gif / vídeo em figurinhas 
como usar : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com o comando relatado acima\n
comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
descrição : converter imagem em adesivo removendo o fundo
como usar : marque a imagem, ou envie usando o comando descrito acima\n
comando : *${prefix}toimg*
descrição  : converter figurinha em imagem
como usar : marque a figurinha com o comando\n
comando : *${prefix}tsticker* ou *${prefix}tstiker*
descrição : converter texto em figurinha
como usar : *${prefix}tsticker seu texto aqui*\n
> *Comandos de meme* <
comando : *${prefix}meme*
descrição : imagens aleatórias de meme [english]
como usar : basta enviar o comando\n
comando : *${prefix}memeindo*
descrição : imagens aleatórias de meme [indo]
como usar : apenas envie o comando\n
> *Outros comandos* <
comando : *${prefix}gtts*
descrição : converter texto em fala / áudio
como usar : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts pt cade a chave da canoa paulin?*\n
comando : *${prefix}loli*
descrição : imagens aleatórias de loli
como usar : apenas envie o comando\n
comando : *${prefix}nsfwloli*
descrição : imagens aleatórias de nsfw loli
como usar : basta enviar o comando\n
comando : *${prefix}url2img*
descrição : tirar prints da web
como usar : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
descrição : sua mensagem será respondida por simi
como usar : *${prefix}simi sua mensagem aqui*\n
comando : *${prefix}ocr*
descrição : pegue o texto na foto
como usar : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}wait*
descrição : procurar anime por foto [ What Anime Is This/That ]
como usar : responder imagem ou enviar imagem com legendan\n
comando : *${prefix}setprefix*
descrição : substituir prefixo
como usar : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
nota : Este comando só pode ser usado pelo proprietário do bot\n
> *Comandos para grupo* <
comando : *${prefix}linkgroup*
descrição : pegue o link do grupo
como usar : basta enviar o comando\
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}tagall*
descrição : marca todos os membros do grupo, incluindo administradores também
como usar : apenas envie o comando
nota : Este comando pode ser usado se você for um administrador do grupo\n
comando : *${prefix}simih*
descrição : ative o modo simi no grupo
como usar : *${prefix}simih 1* para ativar modo simi *${prefix}simih 0* para desativar o modo simi
nota : Este comando só pode ser usado se você for um admin\n`
}

exports.help = help


