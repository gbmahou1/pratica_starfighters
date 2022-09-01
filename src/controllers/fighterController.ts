export async function createBattle(req: Request, res: Response){
    res.status(200).send({message:'estou na rota battles'})

}

export async function getRanking(req: Request, res: Response){
    res.status(200).send({message:'estour na rota ranking'})

}