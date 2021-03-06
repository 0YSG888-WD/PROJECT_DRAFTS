"""empty message

Revision ID: 885836cebdf4
Revises: 46446b1c064b
Create Date: 2020-04-18 18:13:16.448587

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '885836cebdf4'
down_revision = '46446b1c064b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('requests', sa.Column('message', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('requests', 'message')
    # ### end Alembic commands ###
