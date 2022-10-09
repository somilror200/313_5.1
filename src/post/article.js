import React from 'react';
import {Header,Form,Button, Grid} from 'semantic-ui-react'
const Article = (props) => (
    <>

<Form>
    <Form.Field>
      <label>Title</label>
      <input placeholder='title' />
    </Form.Field>

    <Form.Field>
      <label>Abstract</label>
      <textarea></textarea>
    </Form.Field>

    <Form.Field>
      <label>Article Text</label>
      <textarea></textarea>
    </Form.Field>
    <Form.Field>
      <label>Tags</label>
      <input placeholder='tags' />
    </Form.Field>

<Grid>
    <Grid.Row>
        <Grid.Column textAlign='right'>
        <Button className='right' type='submit'>Post</Button>
        </Grid.Column>
    </Grid.Row>
    </Grid>   
    
  </Form>


</>)


export default Article;