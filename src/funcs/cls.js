/**
 * Empties console
 */

function cls() {
    process.stdout.write('\x1Bc');
}

module.exports = cls;