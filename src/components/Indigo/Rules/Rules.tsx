import React, { FC, useEffect } from 'react'
import { Sphere } from '../Sphere/Sphere'
import Typography from '@material-ui/core/Typography'
import { Heading } from '../../Rules/Heading'
import { PlayerId, StoneIds } from '../types'
import { rulesStyles } from '../rulesStyles'
import { Stone } from '../Stone/Stone'
import { StonesWrapper } from './StonesWrapper'

export const Rules: FC = () => {
  useEffect(rulesStyles, [])

  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        marginBottom: 3 * 8,
      }}>
        <div>
          <Sphere color={PlayerId.Player1} />
        </div>
        <div>
          <Sphere color={PlayerId.Player2} />
        </div>
        <div>
          <Sphere color={PlayerId.Player3} />
        </div>
        <div>
          <Sphere color={PlayerId.Player4} />
        </div>
      </div>

      <StonesWrapper>
        <div>
          <Stone id={StoneIds.emerald0} />
        </div>
        <div>
          <Stone id={StoneIds.sapphire} />
        </div>
        <div>
          <Stone id={StoneIds.amber0} />
        </div>
      </StonesWrapper>

      <Typography paragraph>
        Indigo
      </Typography>

      <Heading>
        Indigo
      </Heading>

      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet assumenda autem delectus
        deleniti
        dolor, hic incidunt maxime minima molestiae mollitia nemo nulla odio officiis, perferendis reprehenderit
        saepe
        sequi.
      </Typography>

    </div>
  )
}

