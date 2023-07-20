import test from 'ava'
import sinon from 'sinon'
import getToken from '../src/util/tokens'
import

test.beforeEach(async t => {
 sinon.replace(getToken, 'call', sinon.fake())
})

test.serial(async t => {
 getToken('')
})
