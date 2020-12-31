import type { NextApiRequest, NextApiResponse } from 'next';
import { validateGetQuery } from '../../../helpers/validation';
import { ExternalApi } from '../../../services/external-api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = validateGetQuery({ id: req.query.id });
  const movie = await ExternalApi.getMovie(id);
  res.status(200).json(JSON.stringify(movie));
};

export default handler;
