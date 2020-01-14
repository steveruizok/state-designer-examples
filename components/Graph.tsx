import * as React from 'react'
import { Styled } from 'theme-ui'
import Card from './Card'
import CodeBlock from './CodeBlock'
import EventButton from './EventButton'
import {
  useStateDesigner,
  StateDesigner,
  Graph as GraphNode,
} from 'state-designer'
import { Button, Flex, Box, Text, Radio } from '@theme-ui/components'

export interface Props {
  designer: StateDesigner<unknown, any, any, any>
}

const Graph: React.FC<Props> = ({ designer, children }) => {
  const [data, send, { getGraph, can, reset }] = useStateDesigner(designer)
  const json = JSON.stringify(data, null, 2)

  function onEvent(name: string, payload: any) {
    send(name, payload)
  }

  function canEvent(name: string, payload: any) {
    return can(name, payload)
  }

  return (
    <Card active={true}>
      {(data as any) && (
        <Box sx={{ borderBottom: '1px solid #ccc' }}>
          <CodeBlock code={json} />
        </Box>
      )}
      <Box sx={{ position: 'relative' }}>
        <Button
          sx={{ position: 'absolute', top: 2, right: 2 }}
          variant={'link'}
          onClick={e => {
            e.preventDefault()
            reset()
          }}
        >
          Reset
        </Button>
        <Node {...getGraph()} root onEvent={onEvent} canEvent={canEvent} />
      </Box>
      {children}
    </Card>
  )
}

const Node: React.FC<
  GraphNode & {
    canEvent: (name: string, payload: any) => boolean
    onEvent: (name: string, payload: any) => void
    root?: boolean
  }
> = ({
  name,
  initial,
  active,
  events,
  states,
  canEvent,
  autoEvents,
  onEvent,
  root = false,
}) => {
  const hasEvents = events.length > 0
  const hasContent = states || hasEvents || autoEvents.length > 0

  return (
    <Box>
      {name !== 'root' && (
        <Flex
          px={3}
          py={2}
          backgroundColor="muted"
          sx={{
            alignItems: 'center',
            borderBottom: hasContent
              ? active
                ? '1px solid #ccc'
                : '1px solid #ddd'
              : 'none',
          }}
        >
          <Radio checked={active} onChange={() => {}} disabled={true} />
          <Text
            variant="event"
            sx={{
              fontWeight: active ? '600' : '400',
            }}
          >
            {name}
            {initial && '*'}
          </Text>
        </Flex>
      )}
      {hasContent && (
        <Box px={4} py={3}>
          {autoEvents.length > 0 && (
            <ListContainer name="Auto Events">
              <Styled.ul>
                {autoEvents.map((value, index) => {
                  return (
                    <Styled.li key={index}>
                      <Text variant="autoEvent">{value}</Text>
                    </Styled.li>
                  )
                })}
              </Styled.ul>
            </ListContainer>
          )}
          {hasEvents && (
            <ListContainer name="Events">
              <Styled.ul>
                {events.map((value, index) => {
                  return (
                    <Styled.li key={index}>
                      <EventButton
                        active={active}
                        value={value}
                        enabled={canEvent}
                        onClick={onEvent}
                      />
                    </Styled.li>
                  )
                })}
              </Styled.ul>
            </ListContainer>
          )}
          {states && (
            <ListContainer name="States">
              <Flex
                pt={1}
                sx={{
                  flexDirection: states.length > 1 ? 'column' : 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                {states.map((value, index) => {
                  const childHasContent =
                    value.states ||
                    value.events.length > 0 ||
                    value.autoEvents.length > 0

                  return (
                    <Card
                      key={index}
                      active={value.active}
                      mr={childHasContent ? 5 : 2}
                      sx={{
                        width: '100%', //root ? "100%" : hasContent ? "fit-content" : "100%"
                      }}
                    >
                      <Node {...value} canEvent={canEvent} onEvent={onEvent} />
                    </Card>
                  )
                })}
              </Flex>
            </ListContainer>
          )}
        </Box>
      )}
    </Box>
  )
}

const ListContainer: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <Box>
      <Text variant="label">{name}</Text>
      {children}
    </Box>
  )
}

export default Graph
